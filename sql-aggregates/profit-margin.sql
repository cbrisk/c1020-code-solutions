with cte as (select "films"."title",
            count("inventory"."filmId") * "films"."replacementCost" as "total"
        from "films"
        join "inventory" using ("filmId")
        group by "films"."filmId")
  select "films"."title",
	     sum("payments"."amount") - "total" as "profit"
    from "films"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
    join "payments" using ("rentalId")
    join "cte" using ("title")
group by "films"."title", "cte"."total"
order by "profit" desc
   limit 5;
