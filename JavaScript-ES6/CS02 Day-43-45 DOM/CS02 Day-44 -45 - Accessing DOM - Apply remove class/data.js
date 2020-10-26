function getStudentsData() {
    var arr = [
        { name: 'SK', city: 'Pune' },
        { name: 'Trupti', city: 'Pune' },
        { name: 'Namrata', city: 'BLR' },
        { name: 'Sanjay', city: 'Mumbai' },
        { name: 'Arushi', city: 'Pune' },
    ]

    var d_cpy_arr = arr.map((item) => { return item });

    return d_cpy_arr;
}