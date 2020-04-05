window.addEventListener("load", () => {
    document.getElementById("bank-account-form").addEventListener("submit", (event) => {
        event.preventDefault();
        let node = document.createElement("LI");
        node.className = "list-group-item";
        let textnode = document.createTextNode(document.getElementById("account-number").value
            + " | " + document.getElementById("customer-name").value
            + " | " + document.getElementById("account-type").value);
        node.appendChild(textnode);
        document.getElementById("account-list").appendChild(node);
        document.getElementById("account-number").value = "";
        document.getElementById("customer-name").value = "";
        document.getElementById("account-type").value = "";
    });
});
