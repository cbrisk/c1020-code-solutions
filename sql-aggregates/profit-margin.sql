select "films"."title",
           sum("payments"."amount") - "films"."replacementCost" as "profit"
      from "films"
      join "inventory" using ("filmId")
      join "rentals" using ("inventoryId")
      join "payments" using ("rentalId")
      group by "films"."title", "films"."replacementCost"
      order by "profit" desc
      limit 5;
