function formatTitleAndText(title, text) {
    function printAsHTML(text, tag = "div") {
        return `<${tag}>${text}</${tag}>`;
    }
    
    const heading = printAsHTML(title, "h1");
    const paragraph = printAsHTML(text, "p");
    return printAsHTML(heading + paragraph);
}


console.log(formatTitleAndText("My Title", "This is the content"));