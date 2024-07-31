new Glide('.glide',{
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 30,
    breakpoints: {
        991: {
            perView: 3
            },
        480: {
            perView: 2
        }
    }
}
).mount();