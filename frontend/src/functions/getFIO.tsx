import {SetFIO} from '../Redux/reducers/reducerAuthorize';

export async function getFIO (id:any, part_FIO:string){

    let query_datas = await fetch('http://localhost/back_twitter/give_data.php',{
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({id: id, part_FIO: part_FIO})
    })
        .then( (response:any) => response.json());

    SetFIO(query_datas,part_FIO);
}