export const GETFACULTED = `
    select
        f.*,
        json_agg(u.*) as universities
    from faculties as f
    left join universities  as u on u.univer_id = f.univer_id
    where  case
                                    when $1 > 0 then f.fac_id = $1
                                    else true
                                    end and
            case when $2>0 then f.blok1=$2 else true end and
            case when $3>0 then f.blok2=$3 else true end
    group by f.fac_id
    order by f.fac_id
`;