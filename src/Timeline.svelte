<script>
    import TimelineCard from "./TimelineCard.svelte"
</script>

<h1 class="section_title" id="timeline">What's next?</h1>

<div class="timeline">
    <TimelineCard
        direction="right"
        enterprise="Odoo"
        enterpriseLink="https://www.odoo.com/"
        date="05/08/2020 - Now"
        title="Odoo"
        description="In addition to my contribution to development of many
                applications (Event, Social, Mass Mailing...) and to my code
                reviews, I have discovered and fixed several critical security
                vulnerabilities (RCE, PE, XSS...). I also worked on some low
                level stuffs, like the email sending management (with the
                Outlook and Gmail API), creating a new type of field called
                Properties, an application to manage mailing list, an addon
                for Gmail / Outlook which can link the emails in Odoo..."
        project="My work"
        projectLink="https://github.com/std-odoo"
        />

    <TimelineCard
        direction="left"
        enterprise="CTF Time"
        enterpriseLink="https://ctftime.org/"
        date="2018 - ∞"
        title="Capture The Flag"
        description="I regularly participate in CTFs. My favorite categories are
                cryptography, and the web. I like CTFs for the challenge, but
                also for the team spirit in solving a problem. I also like to
                trying do old CTF tasks, challenge on many website (Root me,
                CryptoHack, Newbie contest) and to improve my python
                cryptographic library."
        />

    <TimelineCard
        direction="right"
        enterprise="NVISO"
        enterpriseLink="https://www.nviso.be/"
        date="04/02/2019 - 03/05/2019"
        title="Internship at NVISO"
        description="During my internship, I contributed to the development of an
                open source tool for outlier detection. I tested different
                detection methods before implementing them. I also participated
                in the development of a data generation tool (data to test the
                detection tool). It was the occasion to learn cool statistic
                stuffs, to train my python skills and to push further my machine
                learning knowledge."
        project="ee-outliers"
        projectLink="https://github.com/Mister7F/outlier-detection-tool"
        />

    <TimelineCard
        direction="left"
        enterprise="NCCBVV"
        enterpriseLink="https://www.facebook.com/confederationconstructionbruxellesvlaamsbrabant/"
        date="20/04/2018 - 22/04/2018"
        title="Hackathon Digital Construction"
        description="I worked on a supervision project, designed to decrease loss and
                steals in the workplace, applied with RFID technology. My
                participation was focused on the control interface, in a mobile
                application."
        project="After Movie"
        projectLink="https://www.youtube.com/watch?v=6Mq9wqtMGqM"
        />

    <TimelineCard
        direction="right"
        enterprise="HeH"
        enterpriseLink="https://www.heh.be/"
        date="30/10/2017 - 05/11/2017"
        title="Web development for HEHLan"
        description="I developed a website for the HEHLan in which users can join
                tournaments, administrators can manage players, sponsors are
                displayed... After that, I managed the intranet."
        project="The website"
        projectLink="http://hehlan.be/"
        />

    <TimelineCard
        direction="left"
        enterprise="Rotary 3 Lys"
        enterpriseLink="http://tournai-trois-lys.rotary1620.org/"
        date="07/07/2017 - 18/07/2017"
        title="Student job for Rotary 3 Lys"
        description="During two weeks, me and two mates developed a reservation
                website for a concert organized by the Rotary 3 Lys, taking care
                their needs."
        />

    <TimelineCard
        direction="right"
        enterprise="Sauter Controls"
        enterpriseLink="https://www.sauter-controls.com/"
        date="24/06/2017 - 04/07/2017"
        title="Student job for Sauter Controls"
        description="During this student job, I developed an application in C#, in
                order to simulate Bacnet devices. This opportunity helps me to improve
                the C# skills I've learned at school."
        />

    <TimelineCard
        direction="left"
        enterprise="Thales Belgium"
        enterpriseLink="https://www.thalesgroup.com/"
        date="03/04/2017 - 24/05/2017"
        title="Traineeship at Thales"
        description="During my internship, I developed a password manager in C++
                (with Qt) storing passwords on a USB token. It allows me to push
                even further my knowledge opf the C++ language and the Qt
                framework (in addition to a few cryptographic concepts)."
        />

    <TimelineCard
        direction="right"
        enterprise="HeH"
        enterpriseLink="https://www.heh.be/"
        date="2014-2019"
        title="Industrial engineer"
        description="Network &amp; security option. During my formation I learned a
                lot of things. But the most important thing I learned is my
                ability to adapt to new problems and learn on my own. We have
                never finished learning!"
        />

    <TimelineCard
        direction="left"
        enterprise="Sacré-Coeur Charleroi"
        enterpriseLink="https://www.google.com/search?q=sacré+coeur+charleroi"
        date="2013-2014"
        title="General education"
        description="Math &amp; Sciences option. This school gave me a critical mind
                and some values that made me the man I am now."
        />

</div>

<style>
    .timeline * {
        box-sizing: border-box;
    }

    /* The actual timeline (the vertical ruler) */
    .timeline {
        position: relative;
        z-index: 0;
        width: 100%;
        margin: 0 auto;
        overflow: visible;
    }

    /* Vertical line of the timeline */
    .timeline::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        z-index: -1;
        width: 4px;
        margin-left: -3px;
        background-color: var(--main-br-color-1);
        content: "";
    }


    @media (max-width: 800px) {
        .timeline {
            margin-left: -40%;
        }
    }
</style>
