const LOGIN = `
    select u.* from users as u where username = $1 and password = crypt($2, u.password)
`
const REGISTER=`
insert into users (fulname, username, password, phone, region) values($1,$2,crypt($3, gen_salt('bf')),$4,$5) returning *
`

const GETUSERS = `
    select
    u.*,
    json_agg(r.*) as result
    from users as u
    left join result as r on r.user_id = u.user_id
    where  case when $1 > 0 then u.user_id = $1 else true end
    group by u.user_id
    order by u.user_id
`;





export {
    LOGIN,
    REGISTER,
    GETUSERS
}