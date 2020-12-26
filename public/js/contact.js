// Protection against spambots.
// Probably a bit overkill, or maybe it's insufficient, IDK,
// but it's definitely not the most straightforward way to do it.
// I'm doing this because I really do not want to have
// non-clickable contact details on my Blog.

// Here I've replaced important information with the equivalent HTML ASCII codes.
// It is split up into several parts,
// and the parts are shuffled.
// Automated tools that just look at the source code
// will hopefully be unable to find my contact details.
// But when the page is rendered, and this JavaScript code is executed,
// everything comes out in perfect condition as clickable links.

// I think this is pretty clever. I like it!

let e_part1_0 = "&#097;&#102;&#110;&#097;&#110;";
let e_part0_1 = "&#116;&#111;";
let p_part0 = "+" + "&#057;&#050;&#051;";
let e_part1_1 = "&#109;&#117;&#103;&#104;&#097;&#108;";
let e_part0_0 = "&#109;&#097;&#105;&#108;";
let w_part0 = "https://api.whatsapp.com/send?phone=";
let e_part3_0 = "&#099;&#111;&#109;";
let e_part2_1 = "&#109;&#097;&#105;&#108;";
let p_part2 = "&#053;&#053;&#050;";
let e_part2_0 = "&#104;&#111;&#116;";
let p_part1 = "&#050;&#051;&#053;";
let p_part3 = "&#056;&#056;&#056;";

let e = e_part1_0 + e_part1_1 + "@" + e_part2_0 + e_part2_1 + "." + e_part3_0;    // assembled email
let p = p_part0 + p_part1 + p_part2 + p_part3;    // assembled phone no

let e_l = e_part0_0 + e_part0_1 + ":" + e_part1_0 + e_part1_1 + "@" + e_part2_0 + e_part2_1 + "." + e_part3_0;    // assembled email link
let w_l = w_part0 + p_part0 + p_part1 + p_part2 + p_part3;    // assembled whatsapp link

document.getElementById("CV_contact_line").innerHTML = "<a href=" + e_l + ">" + e + "</a>" + "  |  " + "<a href=" + w_l + ">" + p + "</a>";

document.getElementById("email-link").href = e_l;
document.getElementById("whatsapp-link").href = w_l;