-- trigger the function every time a user is deleted
create trigger on_auth_user_deleted
  after delete on auth.users
  for each row execute procedure public.handle_delete_user();