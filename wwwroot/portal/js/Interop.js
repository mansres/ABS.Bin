window.interopFunctions = {
    closeHoldOn: function (){
        HoldOn.close();
    },
    openHoldOn: function (text, bgColor = "#1847B1", textColor = "white") {
        var options = {
            theme: "sk-cube-grid",
            message: text,
            backgroundColor: bgColor,
            textColor: textColor
        };

        HoldOn.open(options);
    },
    reloadScriptTags: function () {
        // Finds and executes scripts in a newly added element's body.
        // Needed since innerHTML does not run scripts.
        //
        // Argument body_el is an element in the dom.
        var body_el = $("body")
        function nodeName(elem, name) {
            return elem.nodeName && elem.nodeName.toUpperCase() ===
                name.toUpperCase();
        };

        function evalScript(elem) {
            var data = (elem.text || elem.textContent || elem.innerHTML || ""),
                head = document.getElementsByTagName("head")[0] ||
                    document.documentElement,
                script = document.createElement("script");

            script.type = "text/javascript";
            try {
                // doesn't work on ie...
                script.appendChild(document.createTextNode(data));
            } catch (e) {
                // IE has funky script nodes
                script.text = data;
            }

            head.insertBefore(script, head.firstChild);
            head.removeChild(script);
        };

        // main section of function
        var scripts = [],
            script,
            children_nodes = body_el.childNodes,
            child,
            i;


        var scripts = document.getElementsByTagName("script");

        for (i = 0; scripts[i]; i++) {
            script = scripts[i];
            if (script.parentNode) { script.parentNode.removeChild(script); }
            evalScript(scripts[i]);
        }
    }
}

