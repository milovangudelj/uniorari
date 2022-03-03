-- trigger the function every time a user is created
create trigger on_public_profile_created
  after insert on public.profili
  for each row execute procedure public.complete_new_user();