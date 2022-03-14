export function getFIO (id:any, part_FIO:string){

    // let query_datas = fetch('http://localhost/back_twitter/give_data.php',{
    //     method: 'POST',
    //     headers: {
    //         'X-Requested-With': 'XMLHttpRequest',
    //         'content-type': 'application/x-www-form-urlencoded'
    //     },
    //     body: JSON.stringify({id: id, part_FIO: part_FIO})
    // })
    // .then(response => response.json());

    // return query_datas

    return fetch('http://localhost/back_twitter/give_data.php',{
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({id: id, part_FIO: part_FIO})
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var userid = JSON.stringify(data);
        // console.log(userid);
        return userid;
    })

    // return test;
}