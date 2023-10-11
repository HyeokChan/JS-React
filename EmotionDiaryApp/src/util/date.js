export const getStringDate = (date) => {
    // date.toISOString().slice(0,10); => YYYY-MM-DD
    return date.toISOString().slice(0,10);
}