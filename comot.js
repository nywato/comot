var Comot = {

    init: function(p) {
        this.run(p);
        document.cookie = "nct=0;";
    },
    readData: function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    run: function(p) {
        var click = p.click,
            interval = p.interval;
        var els = document.getElementsByClassName('comot');
        for (var i = 0, len = els.length; i < len; i++) {
            var el = els[i];
            el.addEventListener("click", function() { // use this.
                tn = Comot.readData("nct");
                po = tn - 1 + 2;
                if (Comot.changer(click, interval)) {
                    document.cookie = "nct=" + po + ";";
                } else
                    Comot.n('pointer-events:none;');
            });
        }
    },
    changer: function(c, i) {
        tc = this.readData("nct") - 1 + 2;
        if (tc == c) {
            setTimeout(function() {
                document.cookie = "nct=0;";
                Comot.n('pointer-events:cursor;');
            }, i);
            return false;
        } else {
            return true;
        }
    },
    n: function(w) {
        var els = document.getElementsByClassName('comot');
        for (var i = 0, len = els.length; i < len; i++) {
            var el = els[i];
            el.style = w;
        }
    }
}