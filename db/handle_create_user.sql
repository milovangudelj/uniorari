create or replace function public.handle_create_user() 
returns trigger as $$
begin
  -- Insert a new user profile in the public schema
  insert into public.profili(id, email)
  values (new.id, new.email);

  -- Return the newly created profile
  return new;
end;
$$ language plpgsql security definer;