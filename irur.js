// Example of a text style configuration object
const textStyle = {
    name: 'fontStyle',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333333',
    lineHeight: '1.5',
    letterSpacing: '0.5px'
};

// Example usage in a hypothetical text drawing function
function drawText(ctx, text, x, y, style) {
    ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    ctx.fillStyle = style.color;
    ctx.fillText(text, x, y);
}

// Assuming you have a canvas context (ctx)
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Using the textStyle object to draw text on the canvas
drawText(ctx, 'Hello, world!', 50, 50, textStyle);
