select "countries"."name",
       count("cities".*) as "number of cities"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
