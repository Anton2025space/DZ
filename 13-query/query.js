const objOne = {
    search: 'Вася',
    take: 10
};

function buildQuery(params) {
    return Object.entries(params)
        .map(([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");
}
console.log(buildQuery(objOne))