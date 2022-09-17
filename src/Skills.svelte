<script>
    function nodeIndex(node) {
        let index = 0;
        while ((node = node.previousElementSibling)) {
            index++;
        }
        return index;
    }

    let actualAngle = 0;
    function showSkill(textNode) {
        // Center of the polygon in SVG dim
        let cx = 500;
        let cy = 375;
        let angle = 60;

        let index = nodeIndex(textNode) - 2;

        let oldSelected = document.querySelector("svg text[selected]");
        if (textNode === oldSelected) return;

        // Title
        oldSelected.removeAttribute("selected");
        textNode.setAttribute("selected", "");
        // Description
        document
            .querySelector(".skillInformation ul[selected]")
            .removeAttribute("selected");
        document
            .getElementById(
                "skillsInformation_" + textNode.getAttribute("skill")
            )
            .setAttribute("selected", "");

        let triangle = document.querySelector(".triangle");

        let delta = angle * index - (actualAngle % 360);

        if (delta > 180) {
            actualAngle += delta - 360;
        } else if (delta < -180) {
            actualAngle += delta + 360;
        } else {
            actualAngle += delta;
        }
        triangle.setAttribute(
            "transform",
            "rotate(" + actualAngle + ", " + cx + ", " + cy + ")"
        );
    }
</script>

<h1 class="section_title" id="skills">Skills</h1>
<div class="description">
    Here is a non exhaustive list of the technologies I already used in a
    project. You can click on some of them to see one of the project in which I
    used this technology.
</div>

<div class="container">
    <svg viewBox="0 0 1000 800">
        <path
            class="polygon"
            d="M 500.0 675.0 L 240.19237886466846 525.0000000000001 L 240.19237886466834 225.00000000000009 L 499.99999999999994 75.0 L 759.8076211353315 224.99999999999986 L 759.8076211353317 524.9999999999998  Z"
        />

        <path
            class="triangle"
            d="M500.0 675.0 l-50 -28.867513459481277 l100 0 Z"
            transform="rotate(180, 500, 375)"
        />
        <text
            on:mouseenter={(e) => showSkill(e.currentTarget)}
            x="500.0"
            y="750.0"
            skill="ml"
            text-anchor="middle"
            font-size="25px"
            selected>Machine Learning</text
        >
        <text
            on:mouseenter={(e) => showSkill(e.currentTarget)}
            x="196.8911086754465"
            y="575.0000000000001"
            skill="cpp"
            text-anchor="end"
            font-size="25px">C++</text
        >
        <text
            on:mouseenter={(e) => showSkill(e.currentTarget)}
            x="196.8911086754464"
            y="225.00000000000009"
            skill="python"
            text-anchor="end"
            font-size="25px">Python</text
        >
        <text
            on:mouseenter={(e) => showSkill(e.currentTarget)}
            x="499.99999999999994"
            y="50.0"
            skill="hacking"
            text-anchor="middle"
            font-size="25px">Ethical Hacking</text
        >
        <text
            on:mouseenter={(e) => showSkill(e.currentTarget)}
            x="803.1088913245535"
            y="224.99999999999986"
            skill="web"
            text-anchor="start"
            font-size="25px">Web</text
        >
        <text
            on:mouseenter={(e) => showSkill(e.currentTarget)}
            x="803.1088913245537"
            y="574.9999999999998"
            skill="csharp"
            text-anchor="start"
            font-size="25px">C#</text
        >
    </svg>

    <div class="skillInformation">
        <ul id="skillsInformation_cpp">
            <li>Qt</li>
            <li>Qml</li>
            <li>SDL</li>
            <li>REST API</li>
            <li>WINAPI</li>
            <li>Socket</li>
            <li>CUDA</li>
            <li>Multithreading</li>
            <a href="https://github.com/Mister7F/cryptography" target="_blank">
                <li style="background-color: #dedede;">
                    <span>Crypto</span>
                </li>
            </a>
        </ul>
        <ul id="skillsInformation_csharp">
            <li>SOAP</li>
            <li>Socket</li>
            <li>Windows Form</li>
            <li>Multithreading</li>
            <li>WPF</li>
            <li>SQL</li>
        </ul>
        <ul id="skillsInformation_python">
            <li>Keras</li>
            <li>Tensorflow</li>
            <li>Numpy</li>
            <li>PySide2</li>
            <li>Pyplot</li>
            <li>Pycrypto</li>
            <li>Pandas</li>
            <li>PyQt5</li>
            <li>Flask</li>
            <a href="https://github.com/std-odoo" target="_blank">
                <li style="background-color: #a24688; color: white;">
                    <img src="assets/images/odoo.png" alt="Odoo" /><span
                        >Odoo</span
                    >
                </li>
            </a>
            <a href="https://www.odoo.com/app/social-marketing" target="_blank">
                <li style="background-color: #375197; color: white;">
                    <img
                        src="assets/images/facebook.png"
                        alt="Facebook API"
                    /><span>Facebook API</span>
                </li>
            </a>
            <li>Twitter API</li>
            <a href="https://www.odoo.com/app/social-marketing" target="_blank">
                <li style="background-color: #0077b7; color: white;">
                    <img
                        src="assets/images/linkedin.png"
                        alt="LinkedIn API"
                    /><span>LinkedIn API</span>
                </li>
            </a>
            <li>Dropbox API</li>
        </ul>

        <ul id="skillsInformation_web">
            <a href="https://github.com/Mister7F/locky" target="_blank">
                <li style="background-color: #ff3c03; color: white;">
                    <img src="assets/images/svelte.png" alt="SvelteJS" /><span
                        >Svelte JS</span
                    >
                </li>
            </a>
            <a
                href="https://www.odoo.com/documentation/15.0/applications/productivity/mail_plugins/outlook.html"
                target="_blank"
            >
                <li style="background-color: #20232a; color: #61dafb;">
                    <img src="assets/images/react.svg" alt="React" /><span
                        >React</span
                    >
                </li>
            </a>
            <a
                href="https://workspace.google.com/u/1/marketplace/app/odoo_inbox_addin/873497133275"
                target="_blank"
            >
                <li style="background-color: #017acb; color: white;">
                    <img src="assets/images/typescript.svg" alt="Typescript" />
                    <span>Typescript</span>
                </li>
            </a>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Javascript</li>
            <li>Browser extension</li>
            <li>PWA</li>
            <li>Web Services</li>
        </ul>

        <ul id="skillsInformation_hacking" selected>
            <a
                href="https://www.root-me.org/Mister7F?q=%2Fmister7f"
                target="_blank"
            >
                <li style="background-color: #dedede;">
                    <img src="assets/images/rootme.svg" alt="Root Me" /><span
                        >Root me</span
                    >
                </li>
            </a>
            <a href="https://cryptohack.org/user/Mister7F/" target="_blank">
                <li style="background-color: #fcb731;">
                    <img src="assets/images/cryptohack.jpg" alt="CryptoHack" />
                    <span>CryptoHack</span>
                </li>
            </a>
            <li>CTFs</li>
            <li>Hack the box</li>
            <li>Newbie Contest</li>
            <li>Forensic</li>
            <li>Web</li>
            <li>Crypto</li>
            <li>Pwn</li>
            <li>Metasploit</li>
            <li>Reversing</li>
            <li>Steganography</li>
            <li>Python sandbox</li>
        </ul>

        <ul id="skillsInformation_ml">
            <a
                href="https://github.com/Mister7F/recommender-systems"
                target="_blank"
            >
                <li style="background-color: #cf020c; color: white;">
                    <img src="assets/images/keras.png" alt="Keras" />
                    <span>Keras</span>
                </li>
            </a>
            <li>Tensorflow</li>
            <li>GAN</li>
            <li>CONV</li>
            <li>Recommendation</li>
            <li>Transfert learning</li>
            <li>Autoencoder</li>
        </ul>
    </div>
</div>

<style>
    .description {
        width: 500px;
        margin: auto;
        font-size: 18px;
        text-align: justify;
        background-color: var(--main-bg-color-1-transp);
    }
    .container {
        max-width: 800px;
        margin: auto;
        transition: 1s;
    }

    .polygon {
        fill: var(--main-bg-color-1-transp);
        stroke: var(--main-br-color-1);
        stroke-width: 3px;
    }

    svg text {
        cursor: pointer;
    }

    .triangle {
        border: 1px solid var(--main-br-color-1);
        transition: 300ms;
        fill: var(--main-br-color-1);
    }

    .skillInformation {
        position: relative;
        top: -540px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 350px;
        height: 400px;
        margin: auto;
        margin-bottom: -350px;
    }
    .skillInformation ul {
        display: none;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style-type: none;
    }
    .skillInformation ul[selected] {
        display: flex;
        padding: 0;
    }
    .skillInformation ul li {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5px 15px;
        padding: 5px 10px;
        font-size: 20px;
        background-color: var(--main-bg-color-1);
        border: 1px solid var(--main-br-color-1);
        border-radius: 15px;
    }

    .skillInformation img {
        width: 20px;
        margin: 0;
        margin-right: 5px;
    }
    .skillInformation a {
        color: var(--main-tx-color-1);
        text-decoration: none;
    }
</style>
