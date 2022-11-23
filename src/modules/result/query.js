export const GETRESULT = `
    select
        r.*,
        json_agg(f.*) as faculties,
        json_agg(u.*) as users
    from result as r
    left join faculties  as f on f.fac_id = r.fac_id
    left join users  as u on u.user_id = r.user_id
    where  case
                                    when $1 > 0 then r.res_id = $1
                                    else true
                                    end
    group by r.res_id
    order by r.total_score asc
`;

export const POSTRESULT=`
insert into result (user_id,fac_id,blok1_score,blok2_score,total_score)
values ($1,$2,$3,$4,$5) returning *
`