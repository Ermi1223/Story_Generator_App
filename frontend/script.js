document.getElementById('story-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const setting = document.getElementById('setting').value;
    const theme = document.getElementById('theme').value;
    const style = document.getElementById('style').value;

    // Check if required fields are filled
    if (!name || !setting || !theme) {
        alert('Please fill out all required fields!');
        return;
    }

    // Construct the prompt for the story
    let prompt = `Write a captivating story about a character named ${name} who lives in ${setting}. The story should explore the theme of ${theme}.`;

    if (style) {
        prompt += ` Follow the writing style of ${style}.`;
    }

    // Log the prompt to see it
    console.log("Generated prompt:", prompt);

    // Set up mock response (in real app, this would be an API call)
    const story = `Once upon a time, in the bustling city of ${setting}, there lived a brave character named ${name}. The theme of the story is about ${theme}, and the story unfolds with a mysterious twist that is influenced by ${style ? style : 'the general tone of adventure and discovery.'}`;

    // Display the generated story
    document.getElementById('generated-story').textContent = story;
});
