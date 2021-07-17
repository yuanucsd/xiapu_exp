/*import csv files*/
var practiceI_list = [{"word0":"铁","tone0":"5","word1":"体","tone1":"42","word2":"替","tone2":"35","word3":"踢","tone3":"5","word4":"读","tone4":"2","word5":"听","tone5":"44","word6":"退","tone6":"35","path":"dissertation_sound/exp1/practice/19A/vowel_long_after_window_r1.wav","length":"long","tone":"r1","gl":"modal","answer":"替","seq":"1","neu":"NA","status":"practice","flipped":"NA"},/*{"word0":"铁","tone0":"5","word1":"体","tone1":"42","word2":"替","tone2":"35","word3":"踢","tone3":"5","word4":"读","tone4":"2","word5":"听","tone5":"44","word6":"退","tone6":"35","path":"https://yuanucsd.github.io/dissertation_sound/exp1/practice/19A/vowel_long_after_window_r2.wav","length":"long","tone":"r2","gl":"modal","answer":"替","seq":"2","neu":"NA","status":"practice","flipped":"NA"},{"word0":"铁","tone0":"5","word1":"体","tone1":"42","word2":"替","tone2":"35","word3":"踢","tone3":"5","word4":"读","tone4":"2","word5":"听","tone5":"44","word6":"退","tone6":"35","path":"https://yuanucsd.github.io/dissertation_sound/exp1/practice/19A/vowel_long_after_window_r3.wav","length":"long","tone":"r3","gl":"modal","answer":"替","seq":"3","neu":"NA","status":"practice","flipped":"NA"},{"word0":"铁","tone0":"5","word1":"体","tone1":"42","word2":"替","tone2":"35","word3":"踢","tone3":"5","word4":"读","tone4":"2","word5":"听","tone5":"44","word6":"退","tone6":"35","path":"https://yuanucsd.github.io/dissertation_sound/exp1/practice/19A/vowel_long_after_window_r4.wav","length":"long","tone":"r4","gl":"modal","answer":"替","seq":"4","neu":"NA","status":"practice","flipped":"NA"},{"word0":"铁","tone0":"5","word1":"体","tone1":"42","word2":"替","tone2":"35","word3":"踢","tone3":"5","word4":"读","tone4":"2","word5":"听","tone5":"44","word6":"退","tone6":"35","path":"https://yuanucsd.github.io/dissertation_sound/exp1/practice/19A/vowel_long_after_window_r5.wav","length":"long","tone":"r5","gl":"modal","answer":"替","seq":"5","neu":"NA","status":"practice","flipped":"NA"},{"word0":"修","tone0":"44","word1":"右","tone1":"23","word2":"救","tone2":"35","word3":"肉","tone3":"2","word4":"挑","tone4":"44","word5":"手","tone5":"42","word6":"树","tone6":"35","path":"https://yuanucsd.github.io/dissertation_sound/exp1/practice/153A/vowel_long_after_window_r1.wav","length":"long","tone":"r1","gl":"modal","answer":"救","seq":"6","neu":"NA","status":"practice","flipped":"NA"},{"word0":"修","tone0":"44","word1":"右","tone1":"23","word2":"救","tone2":"35","word3":"肉","tone3":"2","word4":"挑","tone4":"44","word5":"手","tone5":"42","word6":"树","tone6":"35","path":"https://yuanucsd.github.io/dissertation_sound/exp1/practice/153A/vowel_long_after_window_r2.wav","length":"long","tone":"r2","gl":"modal","answer":"救","seq":"7","neu":"NA","status":"practice","flipped":"NA"},{"word0":"修","tone0":"44","word1":"右","tone1":"23","word2":"救","tone2":"35","word3":"肉","tone3":"2","word4":"挑","tone4":"44","word5":"手","tone5":"42","word6":"树","tone6":"35","path":"https://yuanucsd.github.io/dissertation_sound/exp1/practice/153A/vowel_long_after_window_r3.wav","length":"long","tone":"r3","gl":"modal","answer":"救","seq":"8","neu":"NA","status":"practice","flipped":"NA"},{"word0":"修","tone0":"44","word1":"右","tone1":"23","word2":"救","tone2":"35","word3":"肉","tone3":"2","word4":"挑","tone4":"44","word5":"手","tone5":"42","word6":"树","tone6":"35","path":"https://yuanucsd.github.io/dissertation_sound/exp1/practice/153A/vowel_long_after_window_r4.wav","length":"long","tone":"r4","gl":"modal","answer":"救","seq":"9","neu":"NA","status":"practice","flipped":"NA"},{"word0":"修","tone0":"44","word1":"右","tone1":"23","word2":"救","tone2":"35","word3":"肉","tone3":"2","word4":"挑","tone4":"44","word5":"手","tone5":"42","word6":"树","tone6":"35","path":"https://yuanucsd.github.io/dissertation_sound/exp1/practice/153A/vowel_long_after_window_r5.wav","length":"long","tone":"r5","gl":"modal","answer":"救","seq":"10","neu":"NA","status":"practice","flipped":"NA"}*/];


var practiceII_list = [{"word0":"歌谱","tone0":"44","word1":"局长","tone1":"2","path":"dissertation_sound/exp2/practice/19B_05_F.wav","length":"NA","tone":"44","gl":"NA","answer":"歌谱","seq":"1","neu":"2_44","status":"practice","flipped":"no"},
                       /*{"word0":"歌谱","tone0":"44","word1":"局长","tone1":"2","path":"dissertation_sound/exp2/practice/19B_09_F.wav","length":"NA","tone":"44","gl":"NA","answer":"歌谱","seq":"2","neu":"2_44","status":"practice","flipped":"no"},{"word0":"歌谱","tone0":"44","word1":"局长","tone1":"2","path":"dissertation_sound/exp2/practice/20A_09_F.wav","length":"NA","tone":"2","gl":"NA","answer":"局长","seq":"3","neu":"2_44","status":"practice","flipped":"no"},{"word0":"歌谱","tone0":"44","word1":"局长","tone1":"2","path":"dissertation_sound/exp2/practice/20B_03_F.wav","length":"NA","tone":"2","gl":"NA","answer":"局长","seq":"4","neu":"2_44","status":"practice","flipped":"no"},{"word0":"歌谱","tone0":"44","word1":"局长","tone1":"2","path":"dissertation_sound/exp2/practice/20B_05_F.wav","length":"NA","tone":"2","gl":"NA","answer":"局长","seq":"5","neu":"2_44","status":"practice","flipped":"no"},{"word0":"甲板","tone0":"5","word1":"假钱","tone1":"42","path":"dissertation_sound/exp2/practice/54A_01_F.wav","length":"NA","tone":"5","gl":"NA","answer":"甲板","seq":"6","neu":"5_42","status":"practice","flipped":"no"},{"word0":"甲板","tone0":"5","word1":"假钱","tone1":"42","path":"dissertation_sound/exp2/practice/55A_03_F.wav","length":"NA","tone":"42","gl":"NA","answer":"假钱","seq":"7","neu":"5_42","status":"practice","flipped":"no"},{"word0":"甲板","tone0":"5","word1":"假钱","tone1":"42","path":"dissertation_sound/exp2/practice/55B_01_F.wav","length":"NA","tone":"42","gl":"NA","answer":"假钱","seq":"8","neu":"5_42","status":"practice","flipped":"no"}*/];


var trial_ExpI_list = [{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_2.wav","length":"long","tone":"2","gl":"modal","answer":"NA","seq":"1","neu":"NA","status":"test","flipped":"NA"},
                       /*{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_2_gl.wav","length":"long","tone":"2","gl":"gl","answer":"NA","seq":"2","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_2.wav","length":"short","tone":"2","gl":"modal","answer":"NA","seq":"3","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_2_gl.wav","length":"short","tone":"2","gl":"gl","answer":"NA","seq":"4","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_5.wav","length":"long","tone":"5","gl":"modal","answer":"NA","seq":"5","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_5_gl.wav","length":"long","tone":"5","gl":"gl","answer":"NA","seq":"6","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_5.wav","length":"short","tone":"5","gl":"modal","answer":"NA","seq":"7","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_5_gl.wav","length":"short","tone":"5","gl":"gl","answer":"NA","seq":"8","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_11.wav","length":"long","tone":"11","gl":"modal","answer":"NA","seq":"9","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_11_gl.wav","length":"long","tone":"11","gl":"gl","answer":"NA","seq":"10","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_11.wav","length":"short","tone":"11","gl":"modal","answer":"NA","seq":"11","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_11_gl.wav","length":"short","tone":"11","gl":"gl","answer":"NA","seq":"12","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_42.wav","length":"long","tone":"42","gl":"modal","answer":"NA","seq":"13","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_42_gl.wav","length":"long","tone":"42","gl":"gl","answer":"NA","seq":"14","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_42.wav","length":"short","tone":"42","gl":"modal","answer":"NA","seq":"15","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_42_gl.wav","length":"short","tone":"42","gl":"gl","answer":"NA","seq":"16","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_44.wav","length":"long","tone":"44","gl":"modal","answer":"NA","seq":"17","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_long_after_window_44_gl.wav","length":"long","tone":"44","gl":"gl","answer":"NA","seq":"18","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_44.wav","length":"short","tone":"44","gl":"modal","answer":"NA","seq":"19","neu":"NA","status":"test","flipped":"NA"},{"word0":"诗","tone0":"44","word1":"死","tone1":"42","word2":"四","tone2":"35","word3":"寺","tone3":"23","word4":"时","tone4":"11","word5":"湿","tone5":"5","word6":"实","tone6":"2","path":"dissertation_sound/exp1/test/vowel_short_after_window_44_gl.wav","length":"short","tone":"44","gl":"gl","answer":"NA","seq":"20","neu":"NA","status":"test","flipped":"NA"},{"word0":"价","tone0":"35","word1":"爬","tone1":"11","word2":"答","tone2":"5","word3":"大","tone3":"23","word4":"瓦","tone4":"23","word5":"法","tone5":"5","word6":"辣","tone6":"2","path":"dissertation_sound/exp1/filler/26A/vowel_long_after_window_r1.wav","length":"long","tone":"r1","gl":"modal","answer":"价","seq":"21","neu":"NA","status":"filler","flipped":"NA"},{"word0":"价","tone0":"35","word1":"蜡","tone1":"2","word2":"白","tone2":"2","word3":"打","tone3":"42","word4":"打","tone4":"42","word5":"活","tone5":"2","word6":"虾","tone6":"11","path":"dissertation_sound/exp1/filler/26A/vowel_long_after_window_r2.wav","length":"long","tone":"r2","gl":"modal","answer":"价","seq":"22","neu":"NA","status":"filler","flipped":"NA"},{"word0":"价","tone0":"35","word1":"爬","tone1":"11","word2":"答","tone2":"5","word3":"大","tone3":"23","word4":"瓦","tone4":"23","word5":"法","tone5":"5","word6":"辣","tone6":"2","path":"dissertation_sound/exp1/filler/26A/vowel_long_after_window_r3.wav","length":"long","tone":"r3","gl":"modal","answer":"价","seq":"23","neu":"NA","status":"filler","flipped":"NA"},{"word0":"假","tone0":"42","word1":"甲","tone1":"5","word2":"家","tone2":"44","word3":"价","tone3":"35","word4":"顾","tone4":"35","word5":"救","tone5":"35","word6":"鸡","tone6":"44","path":"dissertation_sound/exp1/filler/26A/vowel_long_after_window_r4.wav","length":"long","tone":"r4","gl":"modal","answer":"价","seq":"24","neu":"NA","status":"filler","flipped":"NA"},{"word0":"价","tone0":"35","word1":"顾","tone1":"35","word2":"救","tone2":"35","word3":"旧","tone3":"23","word4":"厚","tone4":"23","word5":"过","tone5":"35","word6":"怪","tone6":"35","path":"dissertation_sound/exp1/filler/26A/vowel_long_after_window_r5.wav","length":"long","tone":"r5","gl":"modal","answer":"价","seq":"25","neu":"NA","status":"filler","flipped":"NA"},{"word0":"价","tone0":"35","word1":"顾","tone1":"35","word2":"救","tone2":"35","word3":"旧","tone3":"23","word4":"厚","tone4":"23","word5":"过","tone5":"35","word6":"怪","tone6":"35","path":"dissertation_sound/exp1/filler/26A/vowel_short_after_window_r1.wav","length":"short","tone":"r1","gl":"modal","answer":"价","seq":"26","neu":"NA","status":"filler","flipped":"NA"},{"word0":"假","tone0":"42","word1":"甲","tone1":"5","word2":"家","tone2":"44","word3":"价","tone3":"35","word4":"顾","tone4":"35","word5":"救","tone5":"35","word6":"鸡","tone6":"44","path":"dissertation_sound/exp1/filler/26A/vowel_short_after_window_r2.wav","length":"short","tone":"r2","gl":"modal","answer":"价","seq":"27","neu":"NA","status":"filler","flipped":"NA"},{"word0":"价","tone0":"35","word1":"顾","tone1":"35","word2":"救","tone2":"35","word3":"旧","tone3":"23","word4":"厚","tone4":"23","word5":"过","tone5":"35","word6":"怪","tone6":"35","path":"dissertation_sound/exp1/filler/26A/vowel_short_after_window_r3.wav","length":"short","tone":"r3","gl":"modal","answer":"价","seq":"28","neu":"NA","status":"filler","flipped":"NA"},  
                       {"word0":"假","tone0":"42","word1":"甲","tone1":"5","word2":"家","tone2":"44","word3":"价","tone3":"35","word4":"顾","tone4":"35","word5":"救","tone5":"35","word6":"鸡","tone6":"44","path":"dissertation_sound/exp1/filler/26A/vowel_short_after_window_r4.wav","length":"short","tone":"r4","gl":"modal","answer":"价","seq":"29","neu":"NA","status":"filler","flipped":"NA"},{"word0":"假","tone0":"42","word1":"割","tone1":"5","word2":"加","tone2":"44","word3":"价","tone3":"35","word4":"国","tone4":"5","word5":"旧","tone5":"23","word6":"街","tone6":"44","path":"dissertation_sound/exp1/filler/26A/vowel_short_after_window_r5.wav","length":"short","tone":"r5","gl":"modal","answer":"价","seq":"30","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"直","tone1":"2","word2":"题","tone2":"11","word3":"底","tone3":"42","word4":"低","tone4":"44","word5":"赌","tone5":"42","word6":"途","tone6":"11","path":"dissertation_sound/exp1/filler/37A/vowel_long_after_window_r1.wav","length":"long","tone":"r1","gl":"modal","answer":"地","seq":"31","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"爱","tone1":"35","word2":"意","tone2":"35","word3":"怪","tone3":"35","word4":"跪","tone4":"23","word5":"坏","tone5":"35","word6":"退","tone6":"35","path":"dissertation_sound/exp1/filler/37A/vowel_long_after_window_r2.wav","length":"long","tone":"r2","gl":"modal","answer":"地","seq":"32","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"直","tone1":"2","word2":"题","tone2":"11","word3":"底","tone3":"42","word4":"低","tone4":"44","word5":"赌","tone5":"42","word6":"途","tone6":"11","path":"dissertation_sound/exp1/filler/37A/vowel_long_after_window_r3.wav","length":"long","tone":"r3","gl":"modal","answer":"地","seq":"33","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"直","tone1":"2","word2":"笔","tone2":"5","word3":"挤","tone3":"42","word4":"急","tone4":"5","word5":"踢","tone5":"5","word6":"一","tone6":"5","path":"dissertation_sound/exp1/filler/37A/vowel_long_after_window_r4.wav","length":"long","tone":"r4","gl":"modal","answer":"地","seq":"34","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"直","tone1":"2","word2":"路","tone2":"23","word3":"大","tone3":"23","word4":"电","tone4":"23","word5":"多","tone5":"44","word6":"替","tone6":"35","path":"dissertation_sound/exp1/filler/37A/vowel_long_after_window_r5.wav","length":"long","tone":"r5","gl":"modal","answer":"地","seq":"35","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"直","tone1":"2","word2":"路","tone2":"23","word3":"大","tone3":"23","word4":"电","tone4":"23","word5":"多","tone5":"44","word6":"替","tone6":"35","path":"dissertation_sound/exp1/filler/37A/vowel_short_after_window_r1.wav","length":"short","tone":"r1","gl":"modal","answer":"地","seq":"36","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"直","tone1":"2","word2":"路","tone2":"23","word3":"大","tone3":"23","word4":"电","tone4":"23","word5":"多","tone5":"44","word6":"替","tone6":"35","path":"dissertation_sound/exp1/filler/37A/vowel_short_after_window_r2.wav","length":"short","tone":"r2","gl":"modal","answer":"地","seq":"37","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"直","tone1":"2","word2":"扶","tone2":"23","word3":"旧","tone3":"23","word4":"路","tone4":"23","word5":"瓦","tone5":"23","word6":"老","tone6":"23","path":"dissertation_sound/exp1/filler/37A/vowel_short_after_window_r3.wav","length":"short","tone":"r3","gl":"modal","answer":"地","seq":"38","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"直","tone1":"2","word2":"路","tone2":"23","word3":"大","tone3":"23","word4":"电","tone4":"23","word5":"多","tone5":"44","word6":"替","tone6":"35","path":"dissertation_sound/exp1/filler/37A/vowel_short_after_window_r4.wav","length":"short","tone":"r4","gl":"modal","answer":"地","seq":"39","neu":"NA","status":"filler","flipped":"NA"},{"word0":"地","tone0":"23","word1":"直","tone1":"2","word2":"笔","tone2":"5","word3":"挤","tone3":"42","word4":"急","tone4":"5","word5":"踢","tone5":"5","word6":"一","tone6":"5","path":"dissertation_sound/exp1/filler/37A/vowel_short_after_window_r5.wav","length":"short","tone":"r5","gl":"modal","answer":"地","seq":"40","neu":"NA","status":"filler","flipped":"NA"}*/];



var trial_ExpII_spk1_list = [{"word0":"路上","tone0":"23","word1":"多谢","tone1":"44","path":"dissertation_sound/exp2/test/01_F/3A.wav","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"1","neu":"23_44","status":"test","flipped":"no"},
                             
                             /*{"word0":"路上","tone0":"23","word1":"多谢","tone1":"44","path":"dissertation_sound/exp2/test/01_F/3A-flipped.wav","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"2","neu":"23_44","status":"test","flipped":"yes"},{"word0":"路上","tone0":"23","word1":"多谢","tone1":"44","path":"dissertation_sound/exp2/test/01_F/3B.wav","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"3","neu":"23_44","status":"test","flipped":"no"},{"word0":"路上","tone0":"23","word1":"多谢","tone1":"44","path":"dissertation_sound/exp2/test/01_F/3B-flipped.wav","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"4","neu":"23_44","status":"test","flipped":"yes"},{"word0":"路上","tone0":"23","word1":"多谢","tone1":"44","path":"dissertation_sound/exp2/test/01_F/4A.wav","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"5","neu":"23_44","status":"test","flipped":"no"},{"word0":"路上","tone0":"23","word1":"多谢","tone1":"44","path":"dissertation_sound/exp2/test/01_F/4A-flipped.wav","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"6","neu":"23_44","status":"test","flipped":"yes"},{"word0":"路上","tone0":"23","word1":"多谢","tone1":"44","path":"dissertation_sound/exp2/test/01_F/4B.wav","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"7","neu":"23_44","status":"test","flipped":"no"},{"word0":"路上","tone0":"23","word1":"多谢","tone1":"44","path":"dissertation_sound/exp2/test/01_F/4B-flipped.wav","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"8","neu":"23_44","status":"test","flipped":"yes"},{"word0":"路口","tone0":"23","word1":"刀口","tone1":"44","path":"dissertation_sound/exp2/test/01_F/7A.wav","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"9","neu":"23_44","status":"test","flipped":"no"},{"word0":"路口","tone0":"23","word1":"刀口","tone1":"44","path":"dissertation_sound/exp2/test/01_F/7A-flipped.wav","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"10","neu":"23_44","status":"test","flipped":"yes"},{"word0":"路口","tone0":"23","word1":"刀口","tone1":"44","path":"dissertation_sound/exp2/test/01_F/7B.wav","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"11","neu":"23_44","status":"test","flipped":"no"},{"word0":"路口","tone0":"23","word1":"刀口","tone1":"44","path":"dissertation_sound/exp2/test/01_F/7B-flipped.wav","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"12","neu":"23_44","status":"test","flipped":"yes"},{"word0":"路口","tone0":"23","word1":"刀口","tone1":"44","path":"dissertation_sound/exp2/test/01_F/8A.wav","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"13","neu":"23_44","status":"test","flipped":"no"},{"word0":"路口","tone0":"23","word1":"刀口","tone1":"44","path":"dissertation_sound/exp2/test/01_F/8A-flipped.wav","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"14","neu":"23_44","status":"test","flipped":"yes"},{"word0":"路口","tone0":"23","word1":"刀口","tone1":"44","path":"dissertation_sound/exp2/test/01_F/8B.wav","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"15","neu":"23_44","status":"test","flipped":"no"},{"word0":"路口","tone0":"23","word1":"刀口","tone1":"44","path":"dissertation_sound/exp2/test/01_F/8B-flipped.wav","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"16","neu":"23_44","status":"test","flipped":"yes"},{"word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","path":"dissertation_sound/exp2/test/01_F/25A.wav","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"17","neu":"2_44","status":"test","flipped":"no"},{"word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","path":"dissertation_sound/exp2/test/01_F/25A-flipped.wav","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"18","neu":"2_44","status":"test","flipped":"yes"},{"word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","path":"dissertation_sound/exp2/test/01_F/25B.wav","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"19","neu":"2_44","status":"test","flipped":"no"},{"word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","path":"dissertation_sound/exp2/test/01_F/25B-flipped.wav","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"20","neu":"2_44","status":"test","flipped":"yes"},{"word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","path":"dissertation_sound/exp2/test/01_F/26A.wav","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"21","neu":"2_44","status":"test","flipped":"no"},{"word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","path":"dissertation_sound/exp2/test/01_F/26A-flipped.wav","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"22","neu":"2_44","status":"test","flipped":"yes"},{"word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","path":"dissertation_sound/exp2/test/01_F/26B.wav","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"23","neu":"2_44","status":"test","flipped":"no"},{"word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","path":"dissertation_sound/exp2/test/01_F/26B-flipped.wav","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"24","neu":"2_44","status":"test","flipped":"yes"},{"word0":"替补","tone0":"35","word1":"铁板","tone1":"5","path":"dissertation_sound/exp2/test/01_F/35A.wav","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"25","neu":"5_35","status":"test","flipped":"no"},{"word0":"替补","tone0":"35","word1":"铁板","tone1":"5","path":"dissertation_sound/exp2/test/01_F/35A-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"26","neu":"5_35","status":"test","flipped":"yes"},{"word0":"替补","tone0":"35","word1":"铁板","tone1":"5","path":"dissertation_sound/exp2/test/01_F/35B.wav","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"27","neu":"5_35","status":"test","flipped":"no"},{"word0":"替补","tone0":"35","word1":"铁板","tone1":"5","path":"dissertation_sound/exp2/test/01_F/35B-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"28","neu":"5_35","status":"test","flipped":"yes"},{"word0":"替补","tone0":"35","word1":"铁板","tone1":"5","path":"dissertation_sound/exp2/test/01_F/36A.wav","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"29","neu":"5_35","status":"test","flipped":"no"},{"word0":"替补","tone0":"35","word1":"铁板","tone1":"5","path":"dissertation_sound/exp2/test/01_F/36A-flipped.wav","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"30","neu":"5_35","status":"test","flipped":"yes"},{"word0":"替补","tone0":"35","word1":"铁板","tone1":"5","path":"dissertation_sound/exp2/test/01_F/36B.wav","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"31","neu":"5_35","status":"test","flipped":"no"},{"word0":"替补","tone0":"35","word1":"铁板","tone1":"5","path":"dissertation_sound/exp2/test/01_F/36B-flipped.wav","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"32","neu":"5_35","status":"test","flipped":"yes"},{"word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","path":"dissertation_sound/exp2/test/01_F/38A.wav","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"33","neu":"5_42","status":"test","flipped":"no"},{"word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","path":"dissertation_sound/exp2/test/01_F/38A-flipped.wav","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"34","neu":"5_42","status":"test","flipped":"yes"},{"word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","path":"dissertation_sound/exp2/test/01_F/38B.wav","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"35","neu":"5_42","status":"test","flipped":"no"},{"word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","path":"dissertation_sound/exp2/test/01_F/38B-flipped.wav","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"36","neu":"5_42","status":"test","flipped":"yes"},{"word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","path":"dissertation_sound/exp2/test/01_F/40A.wav","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"37","neu":"5_42","status":"test","flipped":"no"},{"word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","path":"dissertation_sound/exp2/test/01_F/40A-flipped.wav","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"38","neu":"5_42","status":"test","flipped":"yes"},{"word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","path":"dissertation_sound/exp2/test/01_F/40B.wav","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"39","neu":"5_42","status":"test","flipped":"no"},{"word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","path":"dissertation_sound/exp2/test/01_F/40B-flipped.wav","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"40","neu":"5_42","status":"test","flipped":"yes"},{"word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","path":"dissertation_sound/exp2/test/01_F/42A.wav","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"41","neu":"5_35","status":"test","flipped":"no"},{"word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","path":"dissertation_sound/exp2/test/01_F/42A-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"42","neu":"5_35","status":"test","flipped":"yes"},{"word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","path":"dissertation_sound/exp2/test/01_F/42B.wav","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"43","neu":"5_35","status":"test","flipped":"no"},{"word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","path":"dissertation_sound/exp2/test/01_F/42B-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"44","neu":"5_35","status":"test","flipped":"yes"},{"word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","path":"dissertation_sound/exp2/test/01_F/43B.wav","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"45","neu":"5_35","status":"test","flipped":"no"},{"word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","path":"dissertation_sound/exp2/test/01_F/43B-flipped.wav","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"46","neu":"5_35","status":"test","flipped":"yes"},
                             
{"word0":"假设","tone0":"42","word1":"价格","tone1":"35","path":"dissertation_sound/exp2/test/01_F/48A.wav","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"47","neu":"35_42","status":"test","flipped":"no"},{"word0":"假设","tone0":"42","word1":"价格","tone1":"35","path":"dissertation_sound/exp2/test/01_F/48A-flipped.wav","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"48","neu":"35_42","status":"test","flipped":"yes"},{"word0":"假设","tone0":"42","word1":"价格","tone1":"35","path":"dissertation_sound/exp2/test/01_F/48B.wav","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"49","neu":"35_42","status":"test","flipped":"no"},{"word0":"假设","tone0":"42","word1":"价格","tone1":"35","path":"dissertation_sound/exp2/test/01_F/48B-flipped.wav","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"50","neu":"35_42","status":"test","flipped":"yes"},{"word0":"假设","tone0":"42","word1":"价格","tone1":"35","path":"dissertation_sound/exp2/test/01_F/49A.wav","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"51","neu":"35_42","status":"test","flipped":"no"},{"word0":"假设","tone0":"42","word1":"价格","tone1":"35","path":"dissertation_sound/exp2/test/01_F/49A-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"52","neu":"35_42","status":"test","flipped":"yes"},{"word0":"假设","tone0":"42","word1":"价格","tone1":"35","path":"dissertation_sound/exp2/test/01_F/49B.wav","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"53","neu":"35_42","status":"test","flipped":"no"},{"word0":"假设","tone0":"42","word1":"价格","tone1":"35","path":"dissertation_sound/exp2/test/01_F/49B-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"54","neu":"35_42","status":"test","flipped":"yes"},{"word0":"替身","tone0":"35","word1":"体操","tone1":"42","path":"dissertation_sound/exp2/test/01_F/50A.wav","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"55","neu":"35_42","status":"test","flipped":"no"},{"word0":"替身","tone0":"35","word1":"体操","tone1":"42","path":"dissertation_sound/exp2/test/01_F/50A-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"56","neu":"35_42","status":"test","flipped":"yes"},{"word0":"替身","tone0":"35","word1":"体操","tone1":"42","path":"dissertation_sound/exp2/test/01_F/50B.wav","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"57","neu":"35_42","status":"test","flipped":"no"},{"word0":"替身","tone0":"35","word1":"体操","tone1":"42","path":"dissertation_sound/exp2/test/01_F/50B-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"58","neu":"35_42","status":"test","flipped":"yes"},{"word0":"替身","tone0":"35","word1":"体操","tone1":"42","path":"dissertation_sound/exp2/test/01_F/51A.wav","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"59","neu":"35_42","status":"test","flipped":"no"},{"word0":"替身","tone0":"35","word1":"体操","tone1":"42","path":"dissertation_sound/exp2/test/01_F/51A-flipped.wav","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"60","neu":"35_42","status":"test","flipped":"yes"},{"word0":"替身","tone0":"35","word1":"体操","tone1":"42","path":"dissertation_sound/exp2/test/01_F/51B.wav","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"61","neu":"35_42","status":"test","flipped":"no"},{"word0":"替身","tone0":"35","word1":"体操","tone1":"42","path":"dissertation_sound/exp2/test/01_F/51B-flipped.wav","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"62","neu":"35_42","status":"test","flipped":"yes"},{"word0":"四季","tone0":"35","word1":"湿气","tone1":"5","path":"dissertation_sound/exp2/test/01_F/62A.wav","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"63","neu":"5_35","status":"test","flipped":"no"},{"word0":"四季","tone0":"35","word1":"湿气","tone1":"5","path":"dissertation_sound/exp2/test/01_F/62A-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"64","neu":"5_35","status":"test","flipped":"yes"},{"word0":"四季","tone0":"35","word1":"湿气","tone1":"5","path":"dissertation_sound/exp2/test/01_F/62B.wav","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"65","neu":"5_35","status":"test","flipped":"no"},{"word0":"四季","tone0":"35","word1":"湿气","tone1":"5","path":"dissertation_sound/exp2/test/01_F/62B-flipped.wav","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"66","neu":"5_35","status":"test","flipped":"yes"},{"word0":"四季","tone0":"35","word1":"湿气","tone1":"5","path":"dissertation_sound/exp2/test/01_F/63A.wav","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"67","neu":"5_35","status":"test","flipped":"no"},{"word0":"四季","tone0":"35","word1":"湿气","tone1":"5","path":"dissertation_sound/exp2/test/01_F/63A-flipped.wav","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"68","neu":"5_35","status":"test","flipped":"yes"},{"word0":"四季","tone0":"35","word1":"湿气","tone1":"5","path":"dissertation_sound/exp2/test/01_F/63B.wav","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"69","neu":"5_35","status":"test","flipped":"no"},{"word0":"四季","tone0":"35","word1":"湿气","tone1":"5","path":"dissertation_sound/exp2/test/01_F/63B-flipped.wav","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"70","neu":"5_35","status":"test","flipped":"yes"}*/];

var trial_ExpII_spk2_list = [{"num":"4A.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"1","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/4A.wav"},
                             
                             /*{"num":"4A-flipped.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"2","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/4A-flipped.wav"},{"num":"4B.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"3","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/4B.wav"},{"num":"4B-flipped.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"4","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/4B-flipped.wav"},{"num":"7A.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"5","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/7A.wav"},{"num":"7A-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"6","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/7A-flipped.wav"},{"num":"7B.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"7","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/7B.wav"},{"num":"7B-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"8","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/7B-flipped.wav"},{"num":"8A.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"9","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/8A.wav"},{"num":"8A-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"10","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/8A-flipped.wav"},{"num":"8B.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"11","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/8B.wav"},{"num":"8B-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"12","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/8B-flipped.wav"},{"num":"25A.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"13","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/25A.wav"},{"num":"25A-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"14","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/25A-flipped.wav"},{"num":"25B.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"15","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/25B.wav"},{"num":"25B-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"16","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/25B-flipped.wav"},{"num":"26A.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"17","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/26A.wav"},{"num":"26A-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"18","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/26A-flipped.wav"},{"num":"26B.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"19","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/26B.wav"},{"num":"26B-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"20","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/26B-flipped.wav"},{"num":"35A.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"21","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/35A.wav"},{"num":"35A-flipped.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"22","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/35A-flipped.wav"},{"num":"35B.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"23","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/35B.wav"},{"num":"35B-flipped.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"24","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/35B-flipped.wav"},{"num":"36A.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"25","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/36A.wav"},{"num":"36A-flipped.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"26","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/36A-flipped.wav"},{"num":"36B.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"27","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/36B.wav"},{"num":"36B-flipped.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"28","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/36B-flipped.wav"},{"num":"38A.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"29","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/38A.wav"},{"num":"38A-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"30","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/38A-flipped.wav"},{"num":"38B.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"31","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/38B.wav"},{"num":"38B-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"32","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/38B-flipped.wav"},{"num":"40A.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"33","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/40A.wav"},{"num":"40A-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"34","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/40A-flipped.wav"},{"num":"40B.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"35","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/40B.wav"},{"num":"40B-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"36","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/40B-flipped.wav"},{"num":"42A.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"37","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/42A.wav"},{"num":"42A-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"38","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/42A-flipped.wav"},{"num":"42B.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"39","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/42B.wav"},{"num":"42B-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"40","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/42B-flipped.wav"},{"num":"43A.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"41","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/43A.wav"},{"num":"43B.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"42","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/43B.wav"},
                             
{"num":"43A-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"43","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/43A-flipped.wav"},{"num":"43B-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"44","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/43B-flipped.wav"},{"num":"48A.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"45","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/48A.wav"},{"num":"48A-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"46","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/48A-flipped.wav"},{"num":"49A.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"47","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/49A.wav"},{"num":"49A-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"48","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/49A-flipped.wav"},{"num":"49B.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"49","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/49B.wav"},{"num":"49B-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"50","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/49B-flipped.wav"},{"num":"50A.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"51","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/50A.wav"},{"num":"50A-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"52","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/50A-flipped.wav"},{"num":"51A.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"53","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/51A.wav"},{"num":"51A-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"54","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/51A-flipped.wav"},{"num":"51B.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"55","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/51B.wav"},{"num":"51B-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"56","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/51B-flipped.wav"},{"num":"63A.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"57","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/63A.wav"},{"num":"63A-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"58","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/63A-flipped.wav"},{"num":"63B.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"59","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/03_F/63B.wav"},{"num":"63B-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"60","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/03_F/63B-flipped.wav"}*/];

var trial_ExpII_spk3_list = [{"num":"3A.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"1","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/3A.wav"},
                             
                             /*{"num":"3A-flipped.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"2","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/3A-flipped.wav"},{"num":"3B.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"3","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/3B.wav"},{"num":"3B-flipped.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"4","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/3B-flipped.wav"},{"num":"4B.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"5","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/4B.wav"},{"num":"4B-flipped.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"6","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/4B-flipped.wav"},{"num":"7A.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"7","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/7A.wav"},{"num":"7A-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"8","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/7A-flipped.wav"},{"num":"7B.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"9","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/7B.wav"},{"num":"7B-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"10","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/7B-flipped.wav"},{"num":"8A.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"11","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/8A.wav"},{"num":"8A-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"12","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/8A-flipped.wav"},{"num":"8B.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"13","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/8B.wav"},{"num":"8B-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"14","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/8B-flipped.wav"},{"num":"25A.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"15","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/25A.wav"},{"num":"25A-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"16","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/25A-flipped.wav"},{"num":"25B.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"17","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/25B.wav"},{"num":"25B-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"18","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/25B-flipped.wav"},{"num":"26A.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"19","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/26A.wav"},{"num":"26A-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"20","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/26A-flipped.wav"},{"num":"26B.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"21","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/26B.wav"},{"num":"26B-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"22","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/26B-flipped.wav"},{"num":"36A.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"23","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/36A.wav"},{"num":"36A-flipped.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"24","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/36A-flipped.wav"},{"num":"36B.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"25","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/36B.wav"},{"num":"36B-flipped.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"26","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/36B-flipped.wav"},{"num":"38A.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"27","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/38A.wav"},{"num":"38A-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"28","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/38A-flipped.wav"},{"num":"38B.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"29","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/38B.wav"},{"num":"38B-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"30","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/38B-flipped.wav"},{"num":"40B.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"31","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/40B.wav"},{"num":"40B-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"32","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/40B-flipped.wav"},{"num":"42A.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"33","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/42A.wav"},{"num":"42A-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"34","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/42A-flipped.wav"},{"num":"42B.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"35","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/42B.wav"},{"num":"42B-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"36","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/42B-flipped.wav"},{"num":"43A.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"37","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/43A.wav"},{"num":"43B.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"38","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/43B.wav"},{"num":"43A-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"39","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/43A-flipped.wav"},{"num":"43B-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"40","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/43B-flipped.wav"},{"num":"48A.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"41","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/48A.wav"},{"num":"48A-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"42","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/48A-flipped.wav"},
                             
{"num":"48B.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"43","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/48B.wav"},{"num":"48B-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"44","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/48B-flipped.wav"},{"num":"49A.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"45","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/49A.wav"},{"num":"49A-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"46","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/49A-flipped.wav"},{"num":"49B.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"47","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/49B.wav"},{"num":"49B-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"48","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/49B-flipped.wav"},{"num":"50A.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"49","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/50A.wav"},{"num":"50A-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"50","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/50A-flipped.wav"},{"num":"50B.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"51","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/50B.wav"},{"num":"50B-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"52","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/50B-flipped.wav"},{"num":"51A.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"53","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/51A.wav"},{"num":"51A-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"54","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/51A-flipped.wav"},{"num":"51B.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"55","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/51B.wav"},{"num":"51B-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"56","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/51B-flipped.wav"},{"num":"62A.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"57","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/62A.wav"},{"num":"62A-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"58","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/62A-flipped.wav"},{"num":"62B.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"59","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/62B.wav"},{"num":"62B-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"60","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/62B-flipped.wav"},{"num":"63A.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"61","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/63A.wav"},{"num":"63A-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"62","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/63A-flipped.wav"},{"num":"63B.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"63","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/05_F/63B.wav"},{"num":"63B-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"64","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/05_F/63B-flipped.wav"}*/];

var trial_ExpII_spk4_list = [{"num":"3A.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"1","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/3A.wav"},
                             
                             /*{"num":"3A-flipped.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"2","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/3A-flipped.wav"},{"num":"3B.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"3","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/3B.wav"},{"num":"3B-flipped.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路上","seq":"4","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/3B-flipped.wav"},{"num":"4A.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"5","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/4A.wav"},{"num":"4A-flipped.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"6","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/4A-flipped.wav"},{"num":"4B.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"7","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/4B.wav"},{"num":"4B-flipped.wav","word0":"路上","tone0":"23","word1":"多谢","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"多谢","seq":"8","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/4B-flipped.wav"},{"num":"7A.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"9","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/7A.wav"},{"num":"7A-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"10","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/7A-flipped.wav"},{"num":"7B.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"11","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/7B.wav"},{"num":"7B-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"23","gl":"NA","answer":"路口","seq":"12","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/7B-flipped.wav"},{"num":"8A.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"13","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/8A.wav"},{"num":"8A-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"14","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/8A-flipped.wav"},{"num":"8B.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"15","neu":"23_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/8B.wav"},{"num":"8B-flipped.wav","word0":"路口","tone0":"23","word1":"刀口","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"刀口","seq":"16","neu":"23_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/8B-flipped.wav"},{"num":"25A.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"17","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/25A.wav"},{"num":"25A-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"18","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/25A-flipped.wav"},{"num":"25B.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"19","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/25B.wav"},{"num":"25B-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"2","gl":"NA","answer":"杂技","seq":"20","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/25B-flipped.wav"},{"num":"26A.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"21","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/26A.wav"},{"num":"26A-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"22","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/26A-flipped.wav"},{"num":"26B.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"23","neu":"2_44","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/26B.wav"},{"num":"26B-flipped.wav","word0":"杂技","tone0":"2","word1":"查岗","tone1":"44","length":"NA","tone":"44","gl":"NA","answer":"查岗","seq":"24","neu":"2_44","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/26B-flipped.wav"},{"num":"35A.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"25","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/35A.wav"},{"num":"35A-flipped.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"替补","seq":"26","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/35A-flipped.wav"},{"num":"36A.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"27","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/36A.wav"},{"num":"36A-flipped.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"28","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/36A-flipped.wav"},{"num":"36B.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"29","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/36B.wav"},{"num":"36B-flipped.wav","word0":"替补","tone0":"35","word1":"铁板","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"铁板","seq":"30","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/36B-flipped.wav"},{"num":"38A.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"31","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/38A.wav"},{"num":"38A-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"32","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/38A-flipped.wav"},{"num":"38B.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"33","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/38B.wav"},{"num":"38B-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"42","gl":"NA","answer":"死罪","seq":"34","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/38B-flipped.wav"},{"num":"40A.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"35","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/40A.wav"},{"num":"40A-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"36","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/40A-flipped.wav"},{"num":"40B.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"37","neu":"5_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/40B.wav"},{"num":"40B-flipped.wav","word0":"死罪","tone0":"42","word1":"湿地","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿地","seq":"38","neu":"5_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/40B-flipped.wav"},{"num":"42A.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"39","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/42A.wav"},{"num":"42A-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"40","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/42A-flipped.wav"},{"num":"42B.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"41","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/42B.wav"},{"num":"42B-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"试纸","seq":"42","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/42B-flipped.wav"},
                             
{"num":"43A.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"43","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/43A.wav"},{"num":"43B.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"44","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/43B.wav"},{"num":"43A-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"45","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/43A-flipped.wav"},{"num":"43B-flipped.wav","word0":"试纸","tone0":"35","word1":"湿疹","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿疹","seq":"46","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/43B-flipped.wav"},{"num":"48A.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"47","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/48A.wav"},{"num":"48A-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"48","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/48A-flipped.wav"},{"num":"48B.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"49","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/48B.wav"},{"num":"48B-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"42","gl":"NA","answer":"假设","seq":"50","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/48B-flipped.wav"},{"num":"49A.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"51","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/49A.wav"},{"num":"49A-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"52","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/49A-flipped.wav"},{"num":"49B.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"53","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/49B.wav"},{"num":"49B-flipped.wav","word0":"假设","tone0":"42","word1":"价格","tone1":"35","length":"NA","tone":"35","gl":"NA","answer":"价格","seq":"54","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/49B-flipped.wav"},{"num":"50A.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"55","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/50A.wav"},{"num":"50A-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"56","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/50A-flipped.wav"},{"num":"50B.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"57","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/50B.wav"},{"num":"50B-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"35","gl":"NA","answer":"替身","seq":"58","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/50B-flipped.wav"},{"num":"51B.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"59","neu":"35_42","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/51B.wav"},{"num":"51B-flipped.wav","word0":"替身","tone0":"35","word1":"体操","tone1":"42","length":"NA","tone":"42","gl":"NA","answer":"体操","seq":"60","neu":"35_42","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/51B-flipped.wav"},{"num":"62A.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"61","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/62A.wav"},{"num":"62A-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"62","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/62A-flipped.wav"},{"num":"62B.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"63","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/62B.wav"},{"num":"62B-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"35","gl":"NA","answer":"四季","seq":"64","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/62B-flipped.wav"},{"num":"63A.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"65","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/63A.wav"},{"num":"63A-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"66","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/63A-flipped.wav"},{"num":"63B.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"67","neu":"5_35","status":"test","flipped":"no","path":"dissertation_sound/exp2/test/09_F/63B.wav"},{"num":"63B-flipped.wav","word0":"四季","tone0":"35","word1":"湿气","tone1":"5","length":"NA","tone":"5","gl":"NA","answer":"湿气","seq":"68","neu":"5_35","status":"test","flipped":"yes","path":"dissertation_sound/exp2/test/09_F/63B-flipped.wav"}*/];

var productionList = [{"character":"诗", tone: 44}, {"character":"死", tone: 42}, {"character": "四", tone: 35}, {"character":"寺", tone: 23}, {"character": "时", tone: 11}, {"character": "湿", tone: 5}, {"character": "实", tone: 2}];

var audioFile = [];
var trial_all = practiceI_list.concat(practiceII_list, trial_ExpI_list, trial_ExpII_spk1_list, trial_ExpII_spk2_list, trial_ExpII_spk3_list, trial_ExpII_spk4_list)

for (let i = 0; i < trial_all.length; i++){
	var path = trial_all[i].path;
	audioFile.push(path);
	}


/*javascript number starts from 0*/
/*curTrial is the trial number*/


function preloadAudio(url) {
    var audio = new Audio();
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.src = url;
}



var loaded = 0;
function loadedAudio() {
    // this will be called every time an audio file is loaded
    // we keep track of the loaded files vs the requested files
    loaded++;
    if (loaded == audioFile.length){
    	// all have loaded
    	console.log("All audios are preloaded");
    }
}




for (let i = 0; i < audioFile.length; i++) {
    preloadAudio(audioFile[i]);
}





      var curTrial = 0;
      var curTimeStart = 0;
      var curTimeEnd = 0;
      var responseTime = 0;
/*trialnum is the number shown on the top of the div*/
      var trialnum = 1;
/*trialnumII is the number shown on the top of the div of expII*/
      var trialnumII = 1;
/*totalnum is the number of total trials within one block*/
      var totalnum = 1;
/*starnum is the number that the star is blank*/
      var starnum = 1;
/*starid is the id of the star that is chosen to be blank*/      
      var starid = "";
/*scaleList save the confidence rating*/ 
      var scaleList = [];
/*radioselectedList save the value of the radio button selected in the identification task*/
      var radioselectedList = [];
/*wordselecteList save the character of the radio button for word identification*/
      var wordselectedList = [];
/*optionList save the options shown on the screen with the order that is displayed on the screen*/
      var optionList = [];
/*wordList is the randomized words element in the trialList list*/
      var wordList = [];
      var toneList = [];

/*csvFile is the csv that will be saved at the end of the experiment*/
      var csvFile = [["trial_num", "radio_value", "word_selected", "tone_selected","scale_value", "word_list", "sound", "stimuli_length", "stimuli_tone", "stimuli_gl", "neu_between", "answer", "trial_sequence", "response_time"]];
/*wordListString stores the string version of the options displayed on the screen*/
      var wordListString = "";





         
/*Shuffle the practiceList in the beginning to randomize the order*/      
      var practiceListRandom = jsPsych.randomization.repeat(practiceI_list, 1);
/*Shuffle the trialList in the beginning to randomize the order*/
      var trialListRandom_repeatI = jsPsych.randomization.repeat(trial_ExpI_list, 1);
      var trialListRandom_repeatII = jsPsych.randomization.repeat(trial_ExpI_list, 1);
      var trialListRandom_repeatIII = jsPsych.randomization.repeat(trial_ExpI_list, 1);
      var practiceListRandomII = jsPsych.randomization.repeat(practiceII_list, 1);
      var trialListRandomII_spk1 = jsPsych.randomization.repeat(trial_ExpII_spk1_list, 1);
      var trialListRandomII_spk2 = jsPsych.randomization.repeat(trial_ExpII_spk2_list, 1);
      var trialListRandomII_spk3 = jsPsych.randomization.repeat(trial_ExpII_spk3_list, 1);
      var trialListRandomII_spk4 = jsPsych.randomization.repeat(trial_ExpII_spk4_list, 1);
      var productionListRandom = jsPsych.randomization.repeat(productionList, 1);                 

      var trialListRandom = practiceListRandom.concat(trialListRandom_repeatI, trialListRandom_repeatII, trialListRandom_repeatIII, practiceListRandomII, trialListRandomII_spk1, trialListRandomII_spk2, trialListRandomII_spk3, trialListRandomII_spk4);

      var practiceLength = practiceListRandom.length;
      var partILength = practiceListRandom.length + trialListRandom_repeatI.length;
      var partIILength = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length;
      var partIIILength = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length;
      var expIIPracticeLength = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length;
      var expIISpk1Length = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length + trialListRandomII_spk1.length;
      var expIISpk2Length = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length + trialListRandomII_spk1.length + trialListRandomII_spk2.length;
      var expIISpk3Length = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + trialListRandom_repeatIII.length + practiceListRandomII.length + trialListRandomII_spk1.length + trialListRandomII_spk2.length + trialListRandomII_spk3.length;
      var expIISpk4Length = trialListRandom.length;
          
/*Predownload all audio; need to double check the code      
      var isAllDownloaded = false;
      $(window).on("load", function() {
        isAllDownloaded = true;
         console.log("all audios downloaded");
      });*/



/*beginning of the function*/

      
      /* This gets called when they click the button 
        on the instructions page */
      function StartExperiment() {
        $("#instructions").hide();
        $("#startExperimentButton").unbind("click");
        ShowTrial();
      }
      
      function HideFixation() {
        $("#fixation").hide()
      }
      
      
      function ShowTrial() {
        $("#EndExperimentIPartIButton").unbind("click");
        $("#EndExperimentIPartIIButton").unbind("click");
        $("#EndPracticeButton").unbind("click");
        $("#EndExperimentIIPartIButton").unbind("click");
        $("#EndExperimentIIPartIIButton").unbind("click");
        $("#EndExperimentIIPartIIIButton").unbind("click");
        $("#EndPracticeIButton").unbind("click");

        $("#doneExperimentIPartI").hide();
        $("#doneExperimentIPartII").hide();
        $("#donePracticeI").hide();
        $("#doneExperimentIIPartI").hide();
        $("#doneExperimentIIPartII").hide();
        $("#doneExperimentIIPartIII").hide();
        $("#donePracticeII").hide();
        
        
        $("#fixation").show();
        setTimeout(HideFixation, 500);
        setTimeout(Runs500msAfterFixation, 500);
      }

      function Runs500msAfterFixation() {
        /* This runs 500ms after ShowTrial is called */
        /*set sound attribute, specify which sound will be played*/

              $("#sound").attr(
          "src",
          trialListRandom[curTrial].path
        );  
      
        /*Play the sound when the page is loaded*/
        
        var playPromise = document.getElementById("sound").play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
            })
            .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
          });
        }
        
        /*replay the sound on click*/
        $('#play').on('click', function () {
          $('#sound')[0].play();
        });
    
        $('#playII').on('click', function () {
          $('#sound')[0].play();
        });
        
        curTimeStart = new Date();
        

    
        if (trialListRandom[curTrial].word6 !== undefined){
        $("#trialnum").text("第"+trialnum+"/"+totalnum+"题");
        /* show the trialDiv */
        $("#trialDiv").show();
        $("#trialnumdiv").show();
        $("#scale").show();

          
/*shuffle the index to randomize the option order*/
          
         var wordListIndex =  jsPsych.randomization.repeat([0,1,2,3,4,5,6],1);
         var key0 = "word"+wordListIndex[0];
         var key1 = "word"+wordListIndex[1];
         var key2 = "word"+wordListIndex[2];
         var key3 = "word"+wordListIndex[3];
         var key4 = "word"+wordListIndex[4];
         var key5 = "word"+wordListIndex[5];
         var key6 = "word"+wordListIndex[6];
         var tone0 = "tone"+wordListIndex[0];
         var tone1 = "tone"+wordListIndex[1];
         var tone2 = "tone"+wordListIndex[2];
         var tone3 = "tone"+wordListIndex[3];
         var tone4 = "tone"+wordListIndex[4];
         var tone5 = "tone"+wordListIndex[5];
         var tone6 = "tone"+wordListIndex[6];
          
         wordList = [trialListRandom[curTrial][key0], trialListRandom[curTrial][key1],trialListRandom[curTrial][key2],trialListRandom[curTrial][key3],trialListRandom[curTrial][key4],trialListRandom[curTrial][key5],trialListRandom[curTrial][key6]];
         toneList = [trialListRandom[curTrial][tone0], trialListRandom[curTrial][tone1],trialListRandom[curTrial][tone2],trialListRandom[curTrial][tone3],trialListRandom[curTrial][tone4],trialListRandom[curTrial][tone5],trialListRandom[curTrial][tone6]]
          
         
         $('label[for=word1]').html(wordList[0]); 
         $('label[for=word2]').html(wordList[1]); 
         $('label[for=word3]').html(wordList[2]);  
         $('label[for=word4]').html(wordList[3]); 
         $('label[for=word5]').html(wordList[4]); 
         $('label[for=word6]').html(wordList[5]);  
         $('label[for=word7]').html(wordList[6]);  
          

        wordListString = wordList.join('-');
        optionList.push(wordList);
         $("#submit").on("click", CheckSelect);
        } else {
        $("#trialnumII").text("第"+trialnumII+"/"+totalnum+"题");
        /* show the trialDiv */
        $("#trialDivII").show();
        $("#trialnumdivII").show();
        $("#scaleII").show();

         wordListIndex =  jsPsych.randomization.repeat([0,1],1);
         var key0 = "word"+wordListIndex[0];
         var key1 = "word"+wordListIndex[1];
         var tone0 = "tone"+wordListIndex[0];
         var tone1 = "tone"+wordListIndex[1];
         wordList = [trialListRandom[curTrial][key0], trialListRandom[curTrial][key1]];
         toneList = [trialListRandom[curTrial][tone0], trialListRandom[curTrial][tone1]];
         $('label[for=word1II]').html(wordList[0]); 
         $('label[for=word2II]').html(wordList[1]); 

        
        wordListString = wordList.join('-');
        optionList.push(wordList);
        $("#submitII").on("click", CheckSelect);    

          
        }
        
        
        
        /*save the options in the order displayed into a string and push it to the csv file*/

        
      }
      
      

      /*check if the word and the scale are both selected*/
      function CheckSelect() {
        if (wordList.length == 7){
                  if ($('input[name=ExpI]:checked').val() == undefined & $('input[name=confident]:checked').val() == undefined) {
          alert("请选择您听到的字和您认为选得对不对")
        }
        else if ($('input[name=ExpI]:checked').val() != undefined & $('input[name=confident]:checked').val() == undefined) {
          alert("请选择您认为选得对不对")} 
        else if ($('input[name=ExpI]:checked').val() == undefined & $('input[name=confident]:checked').val() != undefined) {
          alert("请选择您听到的字")} 
        else{
            
/*push the trial number, radio value, word value, and scale value to the csv file*/ 
            curTimeEnd = new Date();
            responseTime = curTimeEnd - curTimeStart
            var radioselectedValue = $('input[name=ExpI]:checked').val();
            radioselectedList.push(radioselectedValue);
            var wordselectedValue = wordList[parseInt($('input[name=ExpI]:checked').val())-1];
            var toneselectedValue = toneList[parseInt($('input[name=ExpI]:checked').val())-1];   
          
            wordselectedList.push(wordselectedValue);
            var scaleValue = $('input[name=confident]:checked').val();
            scaleList.push(scaleValue);
          /*stimuli_length get the length of the stimuli*/
            var stimuli_length = trialListRandom[curTrial].length;
          /*stimuli_tone get the tone of the stimuli*/
            var stimuli_tone = trialListRandom[curTrial].tone;
          /*stimuli_gl get the tone of the stimuli*/
            var stimuli_gl = trialListRandom[curTrial].gl;
            var stimuli_answer = trialListRandom[curTrial].answer;
            var stimuli_neu = trialListRandom[curTrial].neu;
            var curresultList = [curTrial, radioselectedValue, wordselectedValue, toneselectedValue, scaleValue, wordListString, trialListRandom[curTrial].path, stimuli_length, stimuli_tone, stimuli_gl, stimuli_answer, stimuli_neu, trialListRandom[curTrial].seq, responseTime];
            csvFile.push(curresultList);
            
            
            
            DoneWithScale();
            

        }}
          else {
            if ($('input[name=ExpII]:checked').val() == undefined & $('input[name=confidentII]:checked').val() == undefined) {
          alert("请选择您听到的词和您认为选得对不对")
        }
        else if ($('input[name=ExpII]:checked').val() != undefined & $('input[name=confidentII]:checked').val() == undefined) {
          alert("请选择您认为选得对不对")} 
        else if ($('input[name=ExpII]:checked').val() == undefined & $('input[name=confidentII]:checked').val() != undefined) {
          alert("请选择您听到的词")} 
        else{
            
/*push the trial number, radio value, word value, and scale value to the csv file*/  
            curTimeEnd = new Date();
            responseTime = curTimeEnd - curTimeStart
            var radioselectedValue = $('input[name=ExpII]:checked').val();
            radioselectedList.push(radioselectedValue);
            var wordselectedValue = wordList[parseInt($('input[name=ExpII]:checked').val())-1];
            var toneselectedValue = toneList[parseInt($('input[name=ExpII]:checked').val())-1];          
          
          
          
            wordselectedList.push(wordselectedValue);
            var scaleValue = $('input[name=confidentII]:checked').val();
            scaleList.push(scaleValue);
          /*stimuli_length get the length of the stimuli*/
            var stimuli_length = trialListRandom[curTrial].length;
          /*stimuli_tone get the tone of the stimuli*/
            var stimuli_tone = trialListRandom[curTrial].tone;
          /*stimuli_gl get the tone of the stimuli*/
            var stimuli_gl = trialListRandom[curTrial].gl;
            var stimuli_answer = trialListRandom[curTrial].answer;
            var stimuli_neu = trialListRandom[curTrial].neu;

          
          
          var curresultList = [curTrial, radioselectedValue, wordselectedValue, toneselectedValue, scaleValue, wordListString, trialListRandom[curTrial].path, stimuli_length, stimuli_tone, stimuli_gl, stimuli_answer, stimuli_neu, trialListRandom[curTrial].seq, responseTime];
            csvFile.push(curresultList);
          
          
            DoneWithScale();
            

            
          }
        }
        
        
        
        

      }
      

/*unselect all the radio buttons*/


      function DoneWithScale() {
        $("#word1").prop("checked", false);
        $("#word2").prop("checked", false);
        $("#word3").prop("checked", false);
        $("#word4").prop("checked", false);
        $("#word5").prop("checked", false);
        $("#word6").prop("checked", false);
        $("#word7").prop("checked", false);

        $("#word1II").prop("checked", false);
        $("#word2II").prop("checked", false);
        
        
        $("#likertStart").prop("checked", false);
        $("#likert2").prop("checked", false);
        $("#likert3").prop("checked", false);
        $("#likert4").prop("checked", false);
        $("#likertEnd").prop("checked", false);

        $("#likertStartII").prop("checked", false);
        $("#likert2II").prop("checked", false);
        $("#likert3II").prop("checked", false);
        $("#likert4II").prop("checked", false);
        $("#likertEndII").prop("checked", false);

        
        
        $("#trialnumdiv").hide();
        $("#trialDiv").hide();

        $('#submit').unbind('click');
        
        $("#trialnumdivII").hide();
        $("#trialDivII").hide();

        $('#submitII').unbind('click');
        
        trialnum = trialnum + 1;
        trialnumII = trialnumII + 1;
        curTrial = curTrial + 1;

 
        
        
        
        if (curTrial < practiceLength) {
          if (curTrial % 2 == 0) {
            ShowStar()
          }else{
            setTimeout(ShowTrial, 0);
          }
        } 
        
        
        
        else if (curTrial == practiceLength){
            trialnum = 1;
            totalnum = trial_ExpI_list.length;
            setTimeout(DoneWithPracticeI, 500);          
        } 
        
        else if ((curTrial > practiceLength) && (curTrial < (partILength))){
            setTimeout(ShowTrial,0);}   
        else if (curTrial == (partILength)){
            trialnum = 1;
            setTimeout(DoneWithExperimentIPartI, 500);          
        } 

        
          else if((curTrial > (partILength)) && (curTrial < partIILength)){
            setTimeout(ShowTrial, 0);
          }
          else if(curTrial == partIILength){
            trialnum = 1;
            totalnum = trial_ExpI_list.length;
            setTimeout(DoneWithExperimentIPartII, 500);
            
          }
          else if ((curTrial > partIILength) && (curTrial < partIIILength)){
            setTimeout(ShowTrial, 0);
          }
          else if (curTrial == partIIILength){
            trialnumII = 1;
            totalnum = practiceII_list.length;
          setTimeout(DoneWithExperimentI, 500);
          }
          else if ((curTrial > partIIILength) && (curTrial < expIIPracticeLength)) {
            setTimeout(ShowTrial, 0);
          } else if (curTrial == expIIPracticeLength){
            trialnumII = 1;
            totalnum = trialListRandomII_spk1.length;
            setTimeout(DoneWithPracticeII, 500);
            
            
          } else if ((curTrial > expIIPracticeLength) && (curTrial < expIISpk1Length)) {
            setTimeout(ShowTrial, 0);
          } else if (curTrial == expIISpk1Length) {
            trialnumII = 1;
            totalnum = trialListRandomII_spk2.length;
            setTimeout(DoneWithExperimentIIPartI, 500);
            
          } else if ((curTrial > expIISpk1Length) && (curTrial < expIISpk2Length)) {
            setTimeout(ShowTrial, 0);
          } else if (curTrial == expIISpk2Length) {
            trialnumII = 1;
            totalnum = trialListRandomII_spk3.length;
            setTimeout(DoneWithExperimentIIPartII, 500);
          } else if ((curTrial > expIISpk2Length) && (curTrial < expIISpk3Length)) {
            setTimeout(ShowTrial, 0);
          } else if (curTrial == expIISpk3Length) {
            trialnumII = 1;
            totalnum = trialListRandomII_spk4.length;
            setTimeout(DoneWithExperimentIIPartIII, 500);
          } else if ((curTrial > expIISpk3Length) && (curTrial < expIISpk4Length)) {
            setTimeout(curTrial, 0);
          }
        else {
          trialnumII = 1;
          curTrial = 0;
          trialnum = 1;
          setTimeout(DoneWithExperimentII, 500);
        }
        }
      
      function HideStar() {
        $("#distraction").hide();
        ShowTrial();
        $(starid).unbind("click");
      }
      
      function DoneWithExperimentIPartI(){
        $("#doneExperimentIPartI").show();
        $("#EndExperimentIPartIButton").on("click", ShowTrial);

      }
      function DoneWithExperimentIPartII(){
        $("#doneExperimentIPartII").show();
        $("#EndExperimentIPartIIButton").on("click", ShowTrial);

      }

      function DoneWithPracticeI(){
        $("#donePracticeI").show();
        $("#EndPracticeButton").on("click", ShowTrial);

      }


      function DoneWithExperimentIIPartI(){
        $("#doneExperimentIIPartI").show();
        $("#EndExperimentIIPartIButton").on("click", ShowTrial);

      }
      function DoneWithExperimentIIPartII(){
        $("#doneExperimentIIPartII").show();
        $("#EndExperimentIIPartIIButton").on("click", ShowTrial);

      }
      function DoneWithExperimentIIPartIII(){
        $("#doneExperimentIIPartIII").show();
        $("#EndExperimentIIPartIIIButton").on("click", ShowTrial);

      }



      function DoneWithPracticeII(){
        $("#donePracticeII").show();
        $("#EndPracticeIIButton").on("click", ShowTrial);

      }





      
      function ShowStar() {
        starnum = Math.floor((Math.random() * 5) + 1);
        starid = "#star"+starnum;
        $(starid).text("\u2606");
        $("#distraction").show();
        $(starid).click(function(){
            $(starid).text("\u2605");
            setTimeout(HideStar, 500);
        })

      }
      
      
      
      function DoneWithExperimentI() {
        $("#doneExperimentI").show();
        $("#EndExperimentIButton").on("click", StartExperimentII);

      }
      


/*#########################Exp II################################*/
      var wordListII = [];      
      var wordListStringII = "";
      var curTrialII = 0;
      var curTrialIITimeStarted = 0;





      
      function StartExperimentII () {
        $("#doneExperimentI").hide();
        $("#instructions2").show();
        $("#startExperimentIIButton").on("click", HideInstructionII);
      }

      
      function HideInstructionII() {
        $("#instructions2").hide();
        ShowTrial();
      }

      function DoneWithExperimentII() {
        $("#doneExperimentII").show();
        $("#EndExperimentIIButton").on("click", StartProduction);
      }

  
      function StartProduction(){
        $("#doneExperimentII").hide();
        $("#instructionProductiondiv").show();
        $("#startProductiondivButton").on("click", ShowProduction);
        var curresultList = ["curTrial", "production_character", "production_tone"];
        csvFile.push(curresultList)

      }





      function ShowProduction(){
        $("#instructionProductiondiv").hide();
        $("#fixation").show();
        setTimeout(HideFixation, 500);
        setTimeout(RunProduction, 500);
      }      

      function RunProduction(){
        $("#productiondiv").show();
        var production_character = productionListRandom[curTrial].character;
        var production_tone = productionListRandom[curTrial].tone;
        var production_sentence = "我会讲"+"“"+production_character+"”"+"这个字。"
        $("#productionnumdiv").text("第"+trialnum+"/"+productionListRandom.length+"题");
        $("#productiontext").text(production_sentence);
        $("#productionButton").on("click", CheckProduction);
        var curresultList = [curTrial, production_character, production_tone];
        csvFile.push(curresultList);

      }
      

      function CheckProduction(){
        $('#productionButton').unbind('click');
        curTrial = curTrial + 1;
        trialnum = trialnum + 1;
        

        $("#productiondiv").hide();
        if (curTrial < productionListRandom.length){
          ShowProduction();
        } else {
          DoneWithProduction();
        }
        
      }

      

      function DoneWithProduction() {
        $("#debriefing").show();
        $('#doneWithDebriefing').on("click", DoneWithDebriefing);
      }




      function DoneWithDebriefing() {
        $("#debriefing").hide();
        $('#doneWithDebriefing').unbind("click");
        $("#done").show();

        

var subjectHead = ["id", "userAgent"];
var subjectInfo = [$("#subjectid").val(), navigator.userAgent]

csvFile.push([]);
csvFile.push(subjectHead);
csvFile.push(subjectInfo);

var filename = "YCSY" + $("#subjectid").val() + ".csv"        
        
        
let csvContent = "data:text/csv;charset=utf-8," 
    + csvFile.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", filename);
document.body.appendChild(link); // Required for FF

link.click();
        /* AJAX */
        /*$.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);*/
          
          var dataToServer = {
          id: "YCSY"+$("#subjectid").val(),
          experimenter: "YC",
          experimentName: "IdentificationTask",
          curData: JSON.stringify(csvContent),
          };

        
        $.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);
      }
      
      $("#startExperimentButton").on("click", StartExperiment);