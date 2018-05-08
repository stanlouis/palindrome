module.exports = Phrase;

// Add `reverse` to all strings
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    // Return content processed for palindrome testing.
    this.processor = function (string) {
        return string.toLowerCase();
    }

    this.processedContent = function () {
        return this.processor(this.content);
    }
    // Return true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
    this.louder = function () {
        return this.content.toUpperCase();
    }
}

let phrase = new Phrase('Able was I ere I saw Elba');
console.log(phrase.palindrome());
console.log(phrase.louder());