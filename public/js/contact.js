// Protection against spambots.
// Probably a bit overkill, or maybe it's insufficient, IDK,
// but it's definitely not the most straightforward way to do it.
// I'm doing this because I really do not want to have
// non-clickable contact details on my Blog.

// Here I've replaced important information with the equivalent HTML ASCII codes.
// it is split up into several parts,
// and the parts are shuffled.
// Automated tools that just look at the source code
// will hopefully be unable to find my contact details.
// But when the page is rendered, and this JavaScript code is executed,
// everything comes out in perfect condition as clickable links.

// I think this is pretty clever. I like it!

let e_part1_0 = "&#097;&#102;&#110;&#097;&#110;";
let e_part0_1 = "&#116;&#111;";
let w_part1_0 = "&#057;&#050;&#051;";
let e_part1_1 = "&#109;&#117;&#103;&#104;&#097;&#108;";
let e_part0_0 = "&#109;&#097;&#105;&#108;";
let w_part0 = "https://api.whatsapp.com/send?phone=";
let e_part3_0 = "&#099;&#111;&#109;";
let e_part2_1 = "&#109;&#097;&#105;&#108;";
let w_part1_2 = "&#053;&#053;&#050;";
let e_part2_0 = "&#104;&#111;&#116;";
let w_part1_1 = "&#050;&#051;&#053;";
let w_part1_3 = "&#056;&#056;&#056;";

let e = e_part0_0 + e_part0_1 + ":" + e_part1_0 + e_part1_1 + "@" + e_part2_0 + e_part2_1 + "." + e_part3_0;    //assembled email
let w = w_part0 + w_part1_0 + w_part1_1 + w_part1_2 + w_part1_3;    // assembled whatsapp link

document.getElementById("contact").innerHTML = " <a href=" + e + ">email</a>" + " or " + "<a href=" + w + ">WhatsApp</a> ";