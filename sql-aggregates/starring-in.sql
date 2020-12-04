select "categories"."name" as "categories",
       count("filmCategory".*) as "total appearances"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
  group by "categories"."name";
