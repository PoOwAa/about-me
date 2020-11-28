document.addEventListener('DOMContentLoaded', () => {
    const subTitle = document.getElementById('typewriter');
    
    const textList = [
        'passionate programmer.',
        'back-end software engineer.',
        'Deadpool fan.'
    ];
    
    const typeWriter = new Typewriter(subTitle, {
        loop: true,
        autoStart: true,
    });
    
    for (const text of textList) {
        typeWriter.typeString(text).pauseFor(1500).deleteAll(2);
    }

    typeWriter.start();
});