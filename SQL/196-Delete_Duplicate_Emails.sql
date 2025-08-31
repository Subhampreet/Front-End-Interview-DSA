with cte as
(select email, min(id) as id_to_keep
from Person
group by email)

delete from Person
where id not in (select id_to_keep from cte)