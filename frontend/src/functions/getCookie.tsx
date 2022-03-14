export function getCookie(name:string) {
    let cookie = " " + document.cookie;
    let search = " " + name + "=";
    let setStr = null;
    let offset = 0;
    let end = 0;

    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset !== -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end === -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return(setStr);
}