import React from 'react';

function Article({ title, date="January 1, 1970", preview, minutesToRead }) {
    const coffee = "☕️";
    const bento = "🍱";
    let coffeeNumber = Math.ceil(minutesToRead / 5);
    let bentoNumber = Math.ceil(minutesToRead / 10);
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} · {(minutesToRead < 30) ? (coffee.repeat(coffeeNumber) + " " + minutesToRead + " min read") : (bento.repeat(bentoNumber) + " " + minutesToRead + " min read")}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;