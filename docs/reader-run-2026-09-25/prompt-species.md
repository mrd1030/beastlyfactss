# Reader test: species care set (quick pass, 2026-09-25)

You are someone about to get the animal in each set below, who reads care websites carefully and has no patience for filler. For each directory you are given, read every top-level .txt file in it in filename order using the Read tool (issue the Read calls for one directory together in one message). 00 is the species' care guide hub (the page the site's navigation lands on first), 01 the encyclopedia entry, then the deep-dive articles. Each file ends with the internal links its body carries and the Deep Dive and Health and More lists the page shows in its sidebar. Treat those as real, clickable navigation.

THE SIDEBAR FOLDER. Each directory has a `sidebar/` folder holding the FULL TEXT of every Health and More article the sidebar links to (shared guides: quarantine, heating, shedding, vet visits, water quality, emergencies, overviews, comparisons). Do not read them all. They are there so you can check before calling anything missing. Before you list ANY gap, run Grep on that directory's sidebar folder for the topic (for example Grep pattern "quarantine|isolat" with path "<dir>/sidebar", output_mode "content", -C 2), and Read the matching file if the hit looks relevant. If a sidebar article answers it, it is not a gap; at most note "covered only in <sidebar title>" when the species pages give the reader no reason to open that article. Grep and Read inside your given directories are the only tools you may use. Do not run git, do not search the web, do not look anywhere else. You know nothing about who wrote the pages or how.

For EACH set, write a review under 600 words, plain prose with short lists, and never use em or en dashes:
1. One line per page: would you finish it, what you can act on, grade A to F. Add "(thin)" to a page too short to be worth its own page, and "(filler)" to a page padded with generic or repeated text.
2. Conflicts: any number, size, cost, schedule or instruction that disagrees between two pages in the set, or between a species page and a sidebar article. Quote both sides with the file names. Say "None found" if none.
3. Gaps: what someone setting up, buying, feeding and keeping this animal healthy would still need, AFTER the sidebar check. One line each. Say "None" if none.
4. Trust: anything that sounds wrong, overstated, contradicted by another page, or like an advertisement for a product or another website. Quote it.
5. Set grade A to F with one line of reason, and the two changes you would make first.

Output: write all reviews to the output file you are given, one section per set headed "## <directory name>". Then reply with only: "done <output file>". Do not paste the reviews in your reply.
