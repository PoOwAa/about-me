document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const tickRate = 33; // ~30 fps

    counters.forEach(counter => {
        const start = +counter.getAttribute('data-start') || 0;
        
        counter.innerText = numberWithCommas(start);
        
        const updateCount = () => {
            // Show the fancy numbers only when user can watch them!
            if (!isInViewPort(counter)) {
                setTimeout(updateCount, 100);
                return;
            }
            const target = +counter.getAttribute('data-target');
            const speed = +counter.getAttribute('data-speed');
            const start = +counter.getAttribute('data-start') || 0;

            const tickCount = Math.floor(speed / tickRate);
            const tickInc = Math.floor( (target-start) / tickCount);

            // Remove the fancy commas
            const count = +counter.innerText.replace(/,/g, "");

            if (count < target) {
                counter.innerText = numberWithCommas(count + tickInc);

                setTimeout(updateCount, tickRate);
            } else {
                counter.innerText = numberWithCommas(target);
            }
        }

        updateCount();
    });
});

function isInViewPort(element) {
    const bounding = element.getBoundingClientRect();

    if (bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            return true;
        } else {
            return false;
        }
}

/**
 * Add commas to create fancy numbers
 * @param {number} x 
 */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}