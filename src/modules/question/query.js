export const GETQUESTION = `
    select
        q.*,
        json_agg(s.*) as sciences
    from question as q
    left join sciences as s on s.science_id = q.science_id
    where  case
                                    when $1 > 0 then q.ques_id = $1
                                    else true
                                    end and
            case when $2>0 then q.science_id=$2 else true end
    group by q.ques_id
    order by q.ques_id
`;