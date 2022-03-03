create or replace function public.handle_delete_user() 
returns trigger as $$
begin
  -- Delete the user profile associated with the deleted user
  delete from public.profili
  where id = old.id;

  -- Return the deleted record
  return old;
end;
$$ language plpgsql security definer;