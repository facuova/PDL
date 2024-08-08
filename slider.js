new Glide('.glide',{
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 80,
    breakpoints: {
        991: {
            perView: 3
            },
        768: {
            perView: 2
        }
    }
}
).mount();

