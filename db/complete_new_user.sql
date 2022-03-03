create or replace function public.complete_new_user() 
returns trigger as $$
declare
  user_provider text;
  user_name text;
  user_username text;
  possible_duplicate uuid;
  random_num int;
  user_image text;
  low_bound int := 1;
  high_bound int := 998;
begin
  select raw_app_meta_data ->> 'provider' from auth.users where id = new.id into user_provider;

  if user_provider = 'google' 
  then 
    select raw_user_meta_data ->> 'full_name' from auth.users where id = new.id into user_name;
    select raw_user_meta_data ->> 'full_name' from auth.users where id = new.id into user_username;
    user_username := lower(replace(replace(user_username, ' ', '_'), '.', ''));
    select raw_user_meta_data ->> 'picture' from auth.users where id = new.id into user_image;
    
    -- Check for a possible duplicate username
    select id from public.profili where username = user_username into possible_duplicate;

    -- If the username is duplicate find one that is not
    if possible_duplicate is not null
    then
      -- Loop until you find one random number to attach that makes it unique
      while possible_duplicate is not null
      loop
        -- Generate random number between 1 and 999
        select floor(random() * (high_bound-low_bound+1) + low_bound)::int into random_num;
        -- Check for duplicates again
        select id from public.profili where username = concat(user_username, '_', random_num) into possible_duplicate;
      end loop;

      -- Attach the number to the username
      user_username := concat(user_username, '_', random_num);
    end if;
  else
    select raw_user_meta_data ->> 'name' from auth.users where id = new.id into user_name;
    select raw_user_meta_data ->> 'username' from auth.users where id = new.id into user_username;
    user_image := NULL;
  end if;

  update public.profili
  set nome = user_name, username = user_username, immagine = user_image
  where id = new.id;
  return new;
end;
$$ language plpgsql security definer;