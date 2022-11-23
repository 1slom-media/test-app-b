export const GETSCIENCE = `
    select
    s.*
    from sciences as s
    where  case when $1 > 0 then s.science_id = $1 else true end
    order by s.science_id
`;

