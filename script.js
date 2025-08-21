//your JS code here. If required.
/**
 * Band Sorter
 * Sorts an array of band names alphabetically, ignoring articles ('a', 'an', 'the')
 */

document.addEventListener('DOMContentLoaded', function() {
    // Array of band names
    const bands = [
        'The Plot in You', 
        'The Devil Wears Prada', 
        'Pierce the Veil', 
        'Norma Jean', 
        'The Bled', 
        'Say Anything', 
        'The Midway State', 
        'We Came as Romans', 
        'Counterparts', 
        'Oh, Sleeper', 
        'A Skylit Drive', 
        'Anywhere But Here', 
        'An Old Dog'
    ];

    // Function to remove articles for sorting
    function stripArticle(bandName) {
        return bandName.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort the bands array
    const sortedBands = [...bands].sort((a, b) => {
        return stripArticle(a).localeCompare(stripArticle(b));
    });

    // Get the UL element
    const bandList = document.getElementById('band');

    // Create and append list items for each band
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });

    // Optional: Add animation when page loads
    const listItems = document.querySelectorAll('#band li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        // Staggered animation
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100 * index);
    });
});
