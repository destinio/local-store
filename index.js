const LOCAL_KEY = 'dummydata';
function getData() {
    const data = localStorage.getItem(LOCAL_KEY);
    if (data)
        return JSON.parse(data);
    localStorage.setItem(LOCAL_KEY, JSON.stringify([]));
    return [];
}
function setData(data) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}
function addItem(updatedItem) {
    const currentData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    const newData = [...currentData, updatedItem];
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newData));
    // returning is only if you need the new data
    return newData;
}
function deleteItem(itemId) {
    const currentData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    const newData = currentData.filter(item => item.id !== itemId);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newData));
}
