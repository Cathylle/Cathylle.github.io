(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#000033",
	opacity: 0.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.tentacule_milieu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tentacule_calque
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F6C070").ss(3,1,1).p("ABbngQAkBrguCTQgTA8hXDCQhHCcgJBXQgMB9BYBV");
	this.shape.setTransform(15.9,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F6C070").ss(3,1,1).p("AgrGsQhRhZAQhqQAJhOBKh6QBXihAVg1QAviCgeh0");
	this.shape_1.setTransform(15,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F6C070").ss(3,1,1).p("Ag6F4QhJheAUhYQAIhFBOhXQBWiAAYgtQAxhygah+");
	this.shape_2.setTransform(14.2,35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F6C070").ss(3,1,1).p("AhJFDQhAhhAWhGQAJg7BRg2QBWhfAagmQAyhhgViH");
	this.shape_3.setTransform(13.4,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F6C070").ss(3,1,1).p("AhYEPQg4hmAagzQAIgyBVgUQBVg+AcgeQA0hRgQiR");
	this.shape_4.setTransform(12.6,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F6C070").ss(3,1,1).p("AhmDbQgxhqAdghQAJgpBYAPQBUggAfgWQA1g/gLib");
	this.shape_5.setTransform(11.8,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F6C070").ss(3,1,1).p("Ah1CmQgphuAhgOQAIghBcAxQBTACAhgPQA4gugHik");
	this.shape_6.setTransform(11,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F6C070").ss(3,1,1).p("AiDByQgihyAlAEQAIgWBfBSQBTAiAjgHQA5gggCis");
	this.shape_7.setTransform(10.2,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F6C070").ss(3,1,1).p("AiSAYQgZh1AoAXQAIgPBjB0QBSBDAlABQA7gQADi1");
	this.shape_8.setTransform(9.3,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F6C070").ss(3,1,1).p("AiggnQgRh7AsAqQAIgGBlCVQBSBlAoAIQA8ABAIi/");
	this.shape_9.setTransform(8.4,4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F6C070").ss(3,1,1).p("AithbQgJiAAvA9QAIADBpC4QBRCFAqAQQA+ARAMjJ");
	this.shape_10.setTransform(7.5,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F6C070").ss(3,1,1).p("AC6AsQgRDUg/ghQgtgYhQimQhtjZgIgNQgyhPABCE");
	this.shape_11.setTransform(6.4,-6.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F6C070").ss(3,1,1).p("AjGjkQgDhQA2BuQAWA7BoDMQBUCrAzAXQBEAgARjW");
	this.shape_12.setTransform(5.1,-9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6C070").ss(3,1,1).p("AjSkuQgGgdA6CMQAlBqBiC+QBYCwA5AXQBJAfARjY");
	this.shape_13.setTransform(3.8,-13.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F6C070").ss(3,1,1).p("AjflsQgIAXA/CqQAzCZBcCwQBdC1A+AXQBNAdASjZ");
	this.shape_14.setTransform(2.5,-19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F6C070").ss(3,1,1).p("ADuDnQgSDahRgbQhFgXhgi6QhYikhBjFQhCjJAJhL");
	this.shape_15.setTransform(1.2,-25.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F6C070").ss(3,1,1).p("AjOm0QgPBKAxDMQAxDJBJCpQBQDABDAcQBOAiAjjX");
	this.shape_16.setTransform(3.8,-26.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F6C070").ss(3,1,1).p("Aium/QgVBHAgDQQAgDMA7CvQBCDFA+AiQBMAoA0jT");
	this.shape_17.setTransform(6.2,-28.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F6C070").ss(3,1,1).p("ACfEjQhFDQhJgvQg7gngyjLQgui1gPjPQgPjTAbhG");
	this.shape_18.setTransform(8.4,-29.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F6C070").ss(3,1,1).p("Aiwl3QAEBGAkDCQAmDHAkB4QAyCdA2AKQBCANBFjR");
	this.shape_19.setTransform(6.7,-18.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F6C070").ss(3,1,1).p("ADLA+QhGDRg7AWQgyATgwhvQgag7g9i/Qg3iygkhE");
	this.shape_20.setTransform(4,-6.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F6C070").ss(3,1,1).p("AiwDXIBlgbQAbgKANgHIBBghQAUgKAOgQQAMgNAQgcQAPgZAZhQQAYhSAVhh");
	this.shape_21.setTransform(7,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F6C070").ss(3,1,1).p("ACWpgQgjG1hoF/QhaFYhGA1");
	this.shape_22.setTransform(10,59);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F6C070").ss(3,1,1).p("AhxJ3QAtg8A2jHQAQhHAShSQAXhxAQhqQAUhsAJipQAPixALiw");
	this.shape_23.setTransform(13.6,61.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F6C070").ss(3,1,1).p("AhNKNQAlhQAoi+QAPhNAOhRQASh4AJhpQANhWgCjMQADi6AJiw");
	this.shape_24.setTransform(17.2,63.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F6C070").ss(3,1,1).p("AgvKkQAdhkAci3QAMhTAJhPQANh/AChoQAGhBgOjtQgHjDAGiy");
	this.shape_25.setTransform(21.3,65.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F6C070").ss(3,1,1).p("AgcK6QAWh4AQivQAYjxgHiiQgCgsgZkPQgRjNAEix");
	this.shape_26.setTransform(26.5,67.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F6C070").ss(3,1,1).p("AgaKGQAUhaAMiCQATivABikQAEhPgVkVQgPjigFiW");
	this.shape_27.setTransform(26.3,62.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F6C070").ss(3,1,1).p("AgaJUQARg8AJhXQANhsAKikQALhygSkdQgQj6gLh7");
	this.shape_28.setTransform(26.3,57.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F6C070").ss(3,1,1).p("AgbIgQAPgeAHgrQAFgqATijQARiVgPklQgNkPgUhg");
	this.shape_29.setTransform(26.4,52.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F6C070").ss(3,1,1).p("AgaJAQAOggAHg/QAFhAARilQAQiXgKkqQgKkVgRhl");
	this.shape_30.setTransform(25.6,55.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F6C070").ss(3,1,1).p("AgZJgQAOgjAFhTQAFhWAQilQAQiZgHkvQgGkbgRhr");
	this.shape_31.setTransform(24.9,59);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F6C070").ss(3,1,1).p("AgYKAQANgmAEhnQAEhrAPimQAQibgDk1QgCkfgPhy");
	this.shape_32.setTransform(24.2,62.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F6C070").ss(3,1,1).p("AgZKgQANgpADh7QADiAAPioQAPidABk6QABklgMh3");
	this.shape_33.setTransform(23.6,65.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F6C070").ss(3,1,1).p("AgZK/QAMgrACiPQACiWAOipQAPieAFk/QAFkrgKh8");
	this.shape_34.setTransform(23,68.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F6C070").ss(3,1,1).p("AgdLDQAMgtAAimQABivAPifQAMiWAMkyQAKkegFh+");
	this.shape_35.setTransform(22.2,69);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F6C070").ss(3,1,1).p("AghLHQALgugCi+QgBjJAOiVQALiLATknQAQkSgBh/");
	this.shape_36.setTransform(21.6,69.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F6C070").ss(3,1,1).p("AgnLKQALgvgEjVQgDjjAOiLQAMiDAXkZQAXkGADh/");
	this.shape_37.setTransform(21.1,69.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F6C070").ss(3,1,1).p("AgsLOQAKgxgFjsQgGj9ANiBQAMh6AdkMQAdj6AHiA");
	this.shape_38.setTransform(20.5,69.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F6C070").ss(3,1,1).p("AgxLRQAJgygHkDQgHkWAMh3QALhyAkj+QAjjuALiB");
	this.shape_39.setTransform(19.9,70.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F6C070").ss(3,1,1).p("AgvK5QgBg2gFj1QgFkDASh7QATh6AijrQAkjkAGh/");
	this.shape_40.setTransform(19.5,67.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F6C070").ss(3,1,1).p("AgsKhQgLg5gDjpQgEjvAYh/QAbiBAgjYQAljcABh8");
	this.shape_41.setTransform(19.1,65.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F6C070").ss(3,1,1).p("AgqKJQgUg9gBjaQgDjdAeiCQAjiKAejEQAmjSgDh7");
	this.shape_42.setTransform(18.6,63);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F6C070").ss(3,1,1).p("AgnJxQgehAAAjOQAAjJAjiGQApiSAeixQAnjJgIh4");
	this.shape_43.setTransform(18.2,60.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F6C070").ss(3,1,1).p("AglJZQgohEADjAQAAi2AqiJQAwibAdidQAojAgNh2");
	this.shape_44.setTransform(17.8,58.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F6C070").ss(3,1,1).p("AgkJBQgxhHAFizQACijAviNQA4iiAbiKQApi3gRh0");
	this.shape_45.setTransform(17.4,55.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F6C070").ss(3,1,1).p("AgiIpQg7hLAHilQAEiQA1iRQBAiqAZh3QAqitgWhy");
	this.shape_46.setTransform(17,53.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F6C070").ss(3,1,1).p("AggIRQhFhPAJiXQAFh+A8iUQBHiyAXhjQAsikgbhw");
	this.shape_47.setTransform(16.6,51);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F6C070").ss(3,1,1).p("AgeH5QhPhSALiKQAHhqBBiYQBPi6AVhQQAtibgfhu");
	this.shape_48.setTransform(16.2,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,-3.4,24.5,99.2);


(lib.tentacule_cote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tentacule_calque
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F6C070").ss(3,1,1).p("AkWGyQjgkIGJkwQBwhZC9hrQChhcAIgL");
	this.shape.setTransform(-36.1,43.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F6C070").ss(3,1,1).p("Ak+GCQhZiGAzh7QAqhvCdhnQAagSAcgSQAugaA2ggQA+ggBLgmQAhgQAjgRQCdhSAQgV");
	this.shape_1.setTransform(-37.6,38.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F6C070").ss(3,1,1).p("AljFRQhFiJA/hrQAxheCjhOQAagOAbgOQAygSAygaQBDgWBKggQAigNAkgPQCZhJAYge");
	this.shape_2.setTransform(-39.2,33.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F6C070").ss(3,1,1).p("AmHEhQgwiOBMhZQA3hQCpgzQAagKAbgLQA0gJAxgVQBFgNBKgZQAjgKAlgNQCVhAAfgn");
	this.shape_3.setTransform(-41.1,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F6C070").ss(3,1,1).p("AmoDxQgbiSBXhIQA+hDCvgXQAbgGAbgHQA2gBAvgPQBIgEBKgTQAkgHAlgLQCSg2Amgx");
	this.shape_4.setTransform(-43.2,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F6C070").ss(3,1,1).p("AnGDBQgHiXBkg1QBFg2C0ADQAbgBAbgEQA5AHAtgJQBLAGBJgNQAlgDAmgKQCOgtAug6");
	this.shape_5.setTransform(-45.6,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F6C070").ss(3,1,1).p("AnhCRQAOiZBvgmQBLgpC7AfQAcACAaABQA6APAtgDQBOAPBJgHQAmAAAmgHQCLglA1hD");
	this.shape_6.setTransform(-48.2,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F6C070").ss(3,1,1).p("An8BgQAiicB9gVQBRgbDBA6QAbAGAaAEQA+AYArACQBQAXBIgBQAoAEAmgGQCIgaA8hL");
	this.shape_7.setTransform(-50.9,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F6C070").ss(3,1,1).p("AoXBQQA3ihCIgEQBZgMDGBUQAbALAaAGQBBAfAoAJQBUAhBIAGQAoAHAmgEQCFgTBEhS");
	this.shape_8.setTransform(-53.6,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F6C070").ss(3,1,1).p("AoyAaQBLimCVAOQBfABDLBwQAeANAXALQBFAoAnAOQBWArBHAMQAqAKAngCQCBgJBLhe");
	this.shape_9.setTransform(-56.3,-2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F6C070").ss(3,1,1).p("ApNgZQBgisCgAfQBmAPDSCLQAbARAZAPQBHAwAmAUQBZA0BGATQArANAoAAQB+gBBShn");
	this.shape_10.setTransform(-59,-6.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F6C070").ss(3,1,1).p("AJpBwQh4CViwg/QhGgZhbg+QgxgihyhXQjXimhtgeQisgvh1Cv");
	this.shape_11.setTransform(-61.7,-11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F6C070").ss(3,1,1).p("ApOiwQBghYCUBGQBgA4CzCHQAOAIAOALQBqBRA8AiQBaA2BLAXQCpA2CGhz");
	this.shape_12.setTransform(-59.1,-14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6C070").ss(3,1,1).p("Ao0j9QBLgBB8BcQBbBVCjB4QANALAPAKQBiBJBIAjQBXAvBSAUQCiAsCThR");
	this.shape_13.setTransform(-56.5,-20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F6C070").ss(3,1,1).p("AoakzQA1BXBkBxQBWBwCUBvQAOALAOAJQBbBCBTAjQBVAnBWASQCcAjChgw");
	this.shape_14.setTransform(-53.9,-28.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F6C070").ss(3,1,1).p("AIAFmQmvAikQjNQkBi+g/ln");
	this.shape_15.setTransform(-51.3,-35.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F6C070").ss(3,1,1).p("Anul0QBBFwDuDAQEDDWGrgi");
	this.shape_16.setTransform(-49.5,-36.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F6C070").ss(3,1,1).p("Ancl9QBCF3DbDBQD3DgGlgh");
	this.shape_17.setTransform(-47.8,-37.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F6C070").ss(3,1,1).p("AHMGEQmgAhjrjpQjIjDhEmA");
	this.shape_18.setTransform(-46,-38.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F6C070").ss(3,1,1).p("AnnjYQB5EnDyBKQAXALAZAJQCOA3C0gNQB6gTB4gf");
	this.shape_19.setTransform(-48.8,-16.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F6C070").ss(3,1,1).p("AoChNQCtDQEdgwQAYAAAYgBQCSgGCjg8QB4g4Begz");
	this.shape_20.setTransform(-51.5,9.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F6C070").ss(3,1,1).p("AoeC0QDiB7FFirQAZgKAagMQCWhDCShoQB2hjBFhG");
	this.shape_21.setTransform(-54.3,23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F6C070").ss(3,1,1).p("Ao6GSQEqAnGRlTQCZh/CBiYQB1iKArha");
	this.shape_22.setTransform(-57.1,40.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F6C070").ss(3,1,1).p("AmtHfQDIACESlxQAVgaAXgaQBziYBkiYQBZibAlhP");
	this.shape_23.setTransform(-43,48.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F6C070").ss(3,1,1).p("AkgIqQB8gfC4nBQAOgdAPgdQBOixBEiXQBAitAehE");
	this.shape_24.setTransform(-29,55.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F6C070").ss(3,1,1).p("AiUJ1QAxhABfoSQAGggAHgdQApjNAmiVQAki/AZg5");
	this.shape_25.setTransform(-14.9,63);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F6C070").ss(3,1,1).p("AAUrAQggBVgGJqQgFJfAZBj");
	this.shape_26.setTransform(-2,70.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F6C070").ss(3,1,1).p("AgHLBQAUhwgKpIQAAgogBgrQACihgJjvQgBi9AOgp");
	this.shape_27.setTransform(-0.9,70.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F6C070").ss(3,1,1).p("AgaLBQBHh/gZosQgCgpgDgqQABhSgblJQgMjCAPgm");
	this.shape_28.setTransform(1,70.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F6C070").ss(3,1,1).p("AgbrAQgOAjAXDHQAuGjAAABQA6JbiDCY");
	this.shape_29.setTransform(2.9,70.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F6C070").ss(3,1,1).p("AgnLBQBqiIgkobQgDgngDgtQAAgYgpmJQgUjFAPgk");
	this.shape_30.setTransform(2.3,70.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F6C070").ss(3,1,1).p("AghLBQBbiEggoiQgCgpgDgrQAAgxgjltQgQjEAOgl");
	this.shape_31.setTransform(1.7,70.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F6C070").ss(3,1,1).p("AgbLBQBMiAgboqQgCgogDgsQABhJgelSQgNjCAPgm");
	this.shape_32.setTransform(1.1,70.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F6C070").ss(3,1,1).p("AgWLBQA9h8gWoxQgCgpgCgrQABhhgYk3QgJjBAPgn");
	this.shape_33.setTransform(0.6,70.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F6C070").ss(3,1,1).p("AgQLBQAuh3gSo7QgBgogCgqQACh6gSkcQgHi/AOgo");
	this.shape_34.setTransform(0,70.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F6C070").ss(3,1,1).p("AgKLBQAehzgNpCQgBgpgBgqQACiRgMkCQgEi+AOgo");
	this.shape_35.setTransform(-0.6,70.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F6C070").ss(3,1,1).p("AgHLBQAPhvgIpKQAAgpAAgqQABipgHjmQAAi9AOgp");
	this.shape_36.setTransform(-0.9,70.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F6C070").ss(3,1,1).p("AgGLBQAChrgDpSQgBgoAAgqQADjCgEjLQAEi7APgq");
	this.shape_37.setTransform(-1,70.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F6C070").ss(3,1,1).p("AgBLBQgNhnABpaQAAgpAAgoQADjaADiwQAHi6AOgr");
	this.shape_38.setTransform(-1.5,70.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F6C070").ss(3,1,1).p("AgaKmQgthxAko+QADgtAEgpQAOjlAZiRQAZioAQgo");
	this.shape_39.setTransform(-5.2,67.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F6C070").ss(3,1,1).p("Ag2KKQg/h+BCodQAGgqAIgoQAZjVAqiNQApigAPgk");
	this.shape_40.setTransform(-8.6,65.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F6C070").ss(3,1,1).p("AhSJvQhRiMBhn8QAJgpALgmQAkjFA9iJQA3iXAOgh");
	this.shape_41.setTransform(-12.1,62.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F6C070").ss(3,1,1).p("AhvJUQhiibB/naQAMgnAOgkQAwi2BOiEQBHiPANge");
	this.shape_42.setTransform(-15.5,59.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F6C070").ss(3,1,1).p("AiKI5Qh0ipCdm5QAPglASgiQA6inBhiAQBWiGAMgb");
	this.shape_43.setTransform(-18.9,57);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F6C070").ss(3,1,1).p("AinIeQiFi3C8mZQASgiAUggQBGiYBzh8QBkh+AMgX");
	this.shape_44.setTransform(-22.3,54.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F6C070").ss(3,1,1).p("AjDIDQiXjGDbl2QAUggAYggQBRiICFh3QB0h2AKgU");
	this.shape_45.setTransform(-25.8,51.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F6C070").ss(3,1,1).p("AjfHoQiojUD4lWQAYgeAbgeQBch4CXhzQCDhtAKgR");
	this.shape_46.setTransform(-29.2,48.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F6C070").ss(3,1,1).p("Aj6HNQi7jiEXk0QAbgdAfgcQBlhoCqhvQCThlAIgO");
	this.shape_47.setTransform(-32.7,46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-1.5,75.2,89.9);


(lib.soie_milieu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// soie_calque
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F6C070").ss(2,1,1).p("AiXj/QADgkAZgCQAsgEANgJQATgNALgrQAJgiAbAAQAcAAAIAkQAJArATALQAOAHASACQALABARACQAcAFABAoQAAAlgpAWQgVAJgIAFQgNAIAAALQAAAOAaASQAYAQgFAdQgEAWgbAmQgYAhgCAhQgBAeAjAwQAhAsgJAbQgJAbgTAPQgUAQgHASQgGARAAAmQgBAfgNAQQgEAFgEAEQgdAegXgeQgDgEgEgFQgMgSgBgfQgBgjgGgQQgGgOgVgXQgTgUgIgcQgHgaAWgnQAXgogGgcQgFgZgUgmQgRgjgCgfQgBgfAOgQQAOgQgBgOQgBgMgigdQghgbADgkg");
	this.shape.setTransform(-0.1,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F6C070").ss(2,1,1).p("ABfkgQAKABARACQAFABAEACQANAGAFARQACAHAAAJQABAHgBAGQgBAHgEAHQgBACgBADQgCACgCACQgIALgQAJIgFADQgLAFgHAEQgCACgCABQgNAIAAALAgkleQADgJAEgHQAKgSATAAQAXgBAKAaQABADABAFIANAhQAHANAJAGQACABACABQAOAHANACQAKACARABQAUAGAHAUQACAHABAJQAAAHgBAGQgBAKgGAJAgkleQACgIAEgHQAKgTAUgBQAWAAAKAXQACAFABAGAAwk+QAHANAJAGQACABACABABvi4QgHADgFADQgHAEgDADQgMAIgBAKIAAABQAAANAXARQACABABABQABABABABIAAAAQACACABACQACACABADQAFAGAAAHQACAIgBAJQgBAFgCAHQgBAEgCAFQgCAFgEAHABrhyQABABABACQABABAAABQACACABADQADAJAAANQAAABgBACQgBAKgGAOQgCAEgCAFIAAABQgCAEgDAEQgDAHgFAHQgBACgCACQgWAegFAeQAAACAAACQgBAHACAIQABAFABAGQAJAVAWAbQACADACACQASAbACAWQABAJgCAHQgCAEgBAEABMiYQgBANAXARQADABABABABogtQgFAIgGAJQgBACgBADQgCACgBACQgSAYgHAYQgCAJAAAHQgCAHACAIQABAAAAAAQAGAYAZAgQABACABABQARAXAGAUQAEAQgEAMQgCADgBAEIgEAIQAAAAAAAAQgCAEgCADQgDAFgEADIgDADQgDAEgFADIgFAEQgMAKgGALQgDADgBAEQgEAIgBANQgBAHAAAIIgBASQAAASgEAMQAAABgBABQgBADgCADQgCAFgDAEQgEAFgEAEQgHAGgGAEABUDqQgIAHgGAHQgFAHgEAHQgCAGgBAHQgCAKAAANAA3E8QAAAOgCAKQAAAEgCACQAAABAAABQgCAEgCAEQgBACgCADQgBABgBABQgEAFgEAEQgGAGgHAEIgMAEQgGAAgEgCIgIgEQgDgDgEgEQgBgBgBgBQgCgBgBgCQgBgCgCgDQAAAAgBgBQgBgBgBgCQAAgBgBgCQgCgEgBgEIgCgHQgEgMAAgPIAAgGQgBgKgBgJQgCgQgEgJQgBgCgBgDQgDgEgDgFQgDgDgDgDIAAgBQgGgGgIgIQgLgKgHgNQgDgFgCgGIgEgMIgBgFQgBgIABgJQABgJADgKIABgCQAEgKAGgLQACgEACgEQAAAAAAAAQADgGACgFIAKgcQABgGAAgFQAAgBAAAAQAAgDgBgDQgBgHgCgHQgBgEgCgEIgBgDQgCgEgCgFQAAgBgBAAQgFgNgIgNQAAAAgBgBIgLgZQgCgHgCgHQgBgHgBgGIgBgLIAFggQACgEACgEQACgEADgDIABAAQADgDACgDQADgEABgEQACgGAAgGABvDNQgFAJgGAGAgzk4QABAAAAAAQAIgOAGgYAhBkrQAKgGAEgGQAAAAAAgBAhbkhQAEgBADAAQAFgCAEgCAhbkhQAEgBADAAQAFgCAEgCIAKgFQAKgGAEgHAh5i5QgCAAgBgBQgOgNgHgOAh5i5QgBAAAAgBQgQgMgHgPQgHgPABgQQAAgCAAgBQADgkAZgCIAggEAhgh2QACgDACgDQADgDABgEQADgHAAgGIAAgCQgDgLghgcAhqhnQACgFADgEQACgDACgDAhoghQgCgIgCgHQgBgGgBgGAhDA2QAAgGgCgGQgCgFgCgFAhWB3QABgDACgDQAAgBABgBQADgFACgGAhJDlQgKgJgGgLQgEgGgDgIAhlCyQgCgKACgLQABgHADgIAgvEDQgEgFgFgGQgBgCgCgCAglE0QgBgIgBgGQgBgUgFgKQgBgCgBgDAgcFkQAAAAgBgBQgBgDgBgEAgYFrIAAAAQgDgEgBgDAgSFzQgCgCgCgDQgBgBgBgCAgJF8QgEgDgFgG");
	this.shape_1.setTransform(-0.2,39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F6C070").ss(2,1,1).p("AB4kUQAFABAEACQALAFAGAMQADAIACALQACARgIANQgHAMgSALQgNAHgHAFQgDACgCACQgHAFgDAGQgCAEAAAEQgBANAUARQAGAEADAGQAFAHAAAIQACAHAAAJQgBAFgCAGQgBAFgBAFQgEAIgGAMQgFAJgGAKQgEAFgDAGQgNARgGATQgCAIgBAHQgCAHACAHAAJl1QAPAEAIATQACADABAEQAEAOAFALIAUAbQAPAIAPADQAKACAQACQASAFAIAPQAEAIABALQABAOgEALQgHAPgUAOQgKAFgGAEQgGAEgEACQgHAFgDAGQgDAEAAAEQgBAOAUAQQADACACACQAGAGACAHQADAJAAAMQAAABAAABQgBAKgGANQgBAFgCAFQgEAIgFAKQgDAEgCAEQgFAHgDAGQgPAXgFAYQgBACAAABQgCAHABAIIAAAAQABAFACAFQAKAUAWAZQACADACACQAAABABABQAMATAFASQAEAPgEAMQgDAIgEAHQgKAOgNAJQgLAJgIAJQgGAGgDAHQgCAGgBAHQgBADAAADQAAABAAABQgBADAAACQgBAMAAAPQAAAAAAABQABANgDAKQAAADgBACQgBACAAABQgCADgCADQgCAFgDADQgEAFgEAEQgLAKgKADIgGABQgIAAgIgHIgDgDQgCgBgCgCQgBgBgBgBQgBgBgBgCIgBgBQAAAAgBgBQgBgCgBgCQgBgBgBgCQgFgJgCgKIgDgSQAAgEAAgEIAAAAQgBgLgBgJQgBgTgGgJQgDgGgFgHQgIgJgMgLQgKgIgHgLQgGgJgEgNQgBgCAAgCQgBgBAAgBQgCgJACgKQAAgCAAgCQADgSALgUIAAgBQACgEACgDQAEgHADgGIALgiIAAgBQAAgCAAgDQAAgHgDgHQgBgBAAgCQgEgHgEgJQgFgJgGgLIgDgGQgBAAAAgBIgLgYQgCgIgCgIQgBgGgBgFIAAgMQAAgBAAgBIAFgdQACgEADgEQABgCACgCQABgBABgBQADgDACgCQAAAAAAgBQADgEABgEQABgFAAgGIAAgBQgFgLgggaQgBgBgCgBQgKgIgHgLQgKgRABgVQAAgBAAgCQADgkAZgCQAXgBANgCIAAAAQABAAABAAQAFgCAEgCIADgBQAMgGAGgGIABgBQABgBABgBQAJgNAHgZQACgGACgEQAAgBAAAAQABgCABgBQAAgBABgBQAJgSATgBIAJABQAPADAIARQACAEABAGQAEAOAFALABnB4QARAYACAXQAAAJgCAHQgEANgHAKQgIAJgKAHQgQALgIAMQgDAEgBAEQgEAHgBAMAA/A6QAIAXAaAeQABABABACQACADACADAA1FPQgBABAAABQAAABAAAAQgCADgBAEQgCADgCACQgBABgBABQgEAFgEAEQgLAKgKADAA4EzQAAAQgDAMAg1krQABgBACgCQAJgNAGgYQACgGACgEAhWkZQABAAABAAQAFgCAEgCAh5iyQAAAAgBgBQgMgJgHgLAhZh4QACgEABgDQACgGAAgHAhghxQABgBABgBQACgDADgCAhohlQACgEADgDQABgDACgCAhngfQgCgIgCgHQgBgGgBgGAhFAkQgEgIgEgJQgFgJgGgKAhBA1QAAgGgCgGQgBgDgBgCAhXBxQACgDABgCQAEgIAEgHAgjEvQgBgOgBgKQgCgQgEgIQgEgHgHgJQgIgIgKgJQgMgKgGgMQgFgIgEgLQgBgCAAgCQgBgBAAgBAgUFkQgBgCgCgCQgCgFgCgDQgDgHgCgIAgLFtQgDgCgDgDQgBgCgCgC");
	this.shape_2.setTransform(-0.4,38.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F6C070").ss(2,1,1).p("ABDkaQAMAHANADQAKAEAQABQAEACAEABQAIADAFAHQAIAJACAPQADAQgGALQgGAMgPALQgNAHgHAGQgCACgCABQgIAGgCAHQgCADAAADQgCAOASAPQAFAFADAFQAEAGAAAIQACAHAAAJQAAAFgCAGQgBAEgBAFQgDAIgGANQgEAIgGAKQgDAEgDAEQgPAYgHAYQgBACAAACQgCAHABAIQAAAEABAFQAMASAVAYQACACACABQAAABAAAAQAQAWADAYIAAADQABAIgCAIQAAAAgBABQgEANgHAIQgIAJgKAGQgPALgJALQgDAEgCADQgEAIgBANQAAAEAAAFQgBAKAAANQAAASgEANQgBADgDAEQgBADgCACQgBABgBABQgEAFgEADQgHAHgHAEIgOADIgKgEQgHgEgGgHQgBAAgBgBQAAgBgBgBQgBAAAAgBQAAAAgBgBQgBgBgBgCQgBgCgBgBQgBgCgBgCQgDgIgBgJIgDgUQAAgCAAgBIAAgGQgBgIgBgGQgCgTgGgJQgDgGgGgGQgIgIgMgLQgLgHgGgKQgFgIgEgKQgBgEgBgDQgDgLACgOQABgJAEgKIABgFQADgHAEgHQACgEABgDQARgZAEgUQAAAAAAgBQAAgCAAgDQAAgGgCgGQgCgDgBgEQgDgFgDgHQAAAAgBgBQgHgMgIgMABDkaQALAHAOAEQAKADAQACQANADAIAJQAJAJACAPQACANgEAKQgEAOgTAOQgJAFgGAEQgGAEgDADQgHAFgDAHQgCADgBAEQgCANASAQQADABABADQAFAFACAHQABAIABALQAAABAAACQAAAJgEANQgCAFgBAEQgDAIgGALQgCAEgDAEQgDAFgDAFQgNASgIAUQgCAHgBAIQgDAGACAHQAAAAABABQAKAVAXAbQABABABACQACACABABQANAUAFAUQABAEAAADAgjlHQADgJAEgHQAJgRATgCQAVgCALAXQABADABAEQAMAkASAPQABABACAAAgjlHQACgIAEgGQAJgTAUgCQAUgCALAUQACAFACAFQALAkASAPQACABABAAAB5CzQgDAIgEAHQgKANgNAIQgMAIgIAJQgFAGgEAHQgCAFgBAIQgBAHAAAJQgBALAAANQAAANgCAKQgBADgBAEQAAAAgBABQgBACgCADQgDAFgDAEQgEAEgEAEQgHAGgGAEAg0kgQAAgBABAAQADgEADgGIAFgKQADgIACgKAg0kgQABgBABgBQACgEADgFAhakPQADgBADAAQAEgBADgCAhakPQADgBACAAQAFgBADgCIADAAQAPgHAHgGAh5iqQgBgBgBgBQgJgHgFgIIgJgQQgEgMAAgOQAAgBAAgBQADglAZgBIAggCAh5iqQAAgBgBAAQgJgHgGgJAhgiWIgZgUAhchvQADgDACgCQADgEgBgDQACgGgBgHQgDgFgJgJAhchvQADgDADgDQACgDAAgEQABgGgBgGQgDgFgJgJAhfhrIACgCQAAgBABgBAhkhkQABgDACgCQABgBABgBAhkhkQABgCACgDQABgBABgBAhrgzIgBgMQAAgCAAgCQAAgFABgFQAAgBAAgBQAAgBAAAAQAAgBAAgBIAHgSAhogiQgBgFgBgEQgBgEAAgEAhogiQgBgFgBgFQgBgEAAgDAhAA0QABgFgCgGQgCgEgCgEAhVBnQABgBAAAAQAQgZAEgUAhfB8QADgHAEgIQABgDACgCQAAgBAAAAAhLAVQgIgMgIgNIgNgeAghEgQgBgLgBgHQgCgQgFgIQgEgGgIgJQgIgHgJgJQgNgJgGgLQgFgHgDgIQgBgEgBgEQgDgKACgLQABgLAEgLAgTFZQgBgCgBgCQgCgCgBgBQgEgKgCgLAgCFoQgGgDgGgGQgBgBgBgBQAAgBgBAA");
	this.shape_3.setTransform(-0.5,37.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F6C070").ss(2,1,1).p("ABzkCIABAAQABABACAAQALAEAHAHQAIAIADAOQADAOgEALQgEAKgOAMQgLAHgHAGQgCACgCACQgHAGgDAGQgCADAAAEQgCANAPAPQAFAEACAFQADAGgBAIQADAGAAAIQAAAFgBAGQgBAFAAAEQgDAJgGAMQgDAJgHAJQgCAEgDAEQgNASgJATQgDAHgBAHQgDAHABAGQABABAAABQAMASAXAaQABABABACQABABABACIABAAQAQAWACAbQABAJgDAHABzkCQACABACAAQACABADABQAHADAGAGQAJAIADAOQADAMgDAJQgDANgRAOQgIAFgFAFQgGAEgDADQgHAFgDAGQgCAEgBAEQgDANAPAPQADABABACQAEAGABAGQABAIACAKQAAABAAABQABAJgEANQgBAFgBAEQgDAIgFAKQgCAFgDAEQgDAFgDAFQgPAXgIAYQgBACAAABQgEAIABAIQAAAEACADQAMARAWAWQACACABACQANATAEAVQADAOgDALQAAABAAAAQgEANgIAHQgHAJgKAGQgQAJgJALQgDADgCAEQgDAEgBAFQgBACAAACQgCARABAXQAAANgCAKQgBADgBADQgBABAAABQgBADgCACQgBADgDACQAAABgBABQgEAFgEADQgdAbgWgcQgBAAAAAAQgBgBgBgCQgBgCgCgDQgCgBgBgCQAAAAAAgBIAAAAQgBgBAAgCQgCgDgBgEQgEgPgBgSQAAAAAAgBIAAgFQgBgIAAgGQgCgSgHgIQgDgGgGgGQgJgHgMgKQgLgHgGgJQgGgIgDgKQgBgDgBgEQgCgHAAgIQAAgEABgFQADgTAJgTQACgEABgDQARgXAGgSQAAgBAAAAQAAgDAAgCQABgFgCgFQgFgJgFgKQgIgMgIgNQgMgTgEgUQgBgFAAgFIAAgJQAAgCAAgCQAAgXAMgOQAAAAAAAAQABgBABgBIABgCQABgBABgBQADgDADgCQACgEgBgDQABgFgBgGQgDgDgGgFIgbgXQAAAAgBgBQgBgBgBAAQgBgBAAAAQgEgDgDgDAAAlfQAUgBALATQABADACAEQAIAWAKAOQAFAIAHAGQANAJANADQAKAEAPACAAAlfQAUgCAKASQADAEABAFQAIAWAKAOQAFAJAHAFQALAJAQAEQAJAEAPABAB7CtQgEAJgEAGQgKAMgNAIQgMAHgIAIQgGAGgDAHQgCAEgBAEQgBAFgBAGQgBAOAAARQAAATgDAMAA1E/QgBACgCADQgDAEgDAEQgEAFgEADQgcAZgVgaQgBAAAAgBAgBlfIAAAAQABAAAAAAAgXlUIADgCQAGgHAKgCQABAAACAAQABAAAAAAIAAAAAgqkmIAIgWQAAgCABgCIABgDQABgEACgDQADgGADgEAgglDQACgFACgEQACgEADgEAhPkJQAWgHAGgHQAFgGAEgJAhVkHQADgBADgBQAWgHAGgIQAFgFAEgJAhVkHIAAAAQADgBADgBAiVjgQADgkAYgBQAXgBAMgBQABAAABAAAh6ikQgEgDgEgEQgVgUACgfAhahsQADgDACgCQADgDgCgDQACgGgCgGQgDgDgFgFAhAApQAAgBAAgBQgFgJgGgKQgHgLgIgLQgMgUgEgVQgBgEAAgFAg/AzQABgFgCgFIAAAAAhWBiIABgBQAQgXAGgSAhmCYQAAgDAAgDQACgVALgVQABgDACgCQAAgBAAAAAhfhmQABgBABgBAggEVQgBgLAAgHQgDgOgFgIQgEgHgIgHQgIgHgKgIQgNgIgGgLQgFgHgDgIQgBgEgBgEQgCgGAAgIAgRFPQgBgBgBgBQgBgBgBgCQgBgCgBgB");
	this.shape_4.setTransform(-0.6,36.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F6C070").ss(2,1,1).p("ABxj4QAFABADACQATAGAHAWQAEANgDAJQgCAKgNALQgKAIgGAHQgDABgBACQgHAGgCAGQgCAEgBAEQgDANAOAOQADAEABAFQACAFAAAHQADAGAAAIQABAFgBAGQAAAEgBAFQgCAIgFAMQgEAJgGAKQgCABgBACQgPAZgMAYQAAACgBACQgEAHABAHQAAAEABADQAOAQAVAVQACABACACQAMATAEAVQAEAQgFALQgDAIgFAFQgKALgNAIQgMAHgJAHQgGAGgDAGQgDAFAAAGIAAABQAAAAAAABQgBADAAADQgBAPAAAQQAAABAAABIAAAGQAAAKgBAHQgBADgBACQgCAEgCAEQgBACgDACQAAABgBABQgEAFgEADQgBABAAAAQgBABgBABABxj4IABAAQAaAHAIAYQADALgBAIQgBALgQAPQgHAFgFAFQgFAFgDADQgGAFgDAFQgDAFgBAEQgEAMANAOQACACABACQADAFABAFQAAAIACAJQABACAAABQABAIgDANQgBAEAAAFQgDAHgFALQgBAEgDAFQgCADgCADQgOAUgLAUQgDAHgCAHQgEAGACAGQAAABABAAQAMASAYAXQABABABACQABABABACQAAAAABAAQAPAVACAcQAAAIgCAIQgEANgIAIQgIAHgKAGQgQAJgKAKQgDADgCADQgDAFgBAHAgWlJQAIgIAMgCQAUgFAMAVQACACABAEQALAaANAQQADADADAEQANAJANAEQAJAFAPACAgWlJQAIgJANgCQASgEAMATQADADACAFQAKAZANARQADAEAEAEQALAJAOAEQAJAFAPABAA3EzQgBABAAABQgCADgCACQgDAFgDADQgDAEgDADQgCACgBABIgCABIgZAIQgKgBgKgLQgBgBAAAAQgBgBAAAAQgBgBgBgBQgBgCgCgDQgCgCgBgCQgBgBAAgCQgDgHgBgHIgDgZQAAgBAAAAIgBgJQAAgIgBgGQgCgOgGgIQgEgGgJgHQgIgGgJgIQgOgHgGgKQgHgJgDgNQgDgKACgOQACgTAJgSQACgFACgDQABgCACgDQANgSAHgPQAAgCAAgCQACgFgBgFQgFgIgGgKQgIgMgJgLQgMgUgDgTQgBgDAAgDIgBgNQAAgCAAgCQACgXAMgNQAAgBAAAAQADgDACgCQADgDADgCQACgDgCgDQABgFgCgFQgDgDgGgFIgYgTQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBgBQgBgBgBAAQgBgBAAAAQgOgLgGgOQgHgOABgSQAAgBAAAAQADglAYgBQAZABAMgBQAagHAHgHQADgDACgFAA6EdQgBANgCAJAA8DwQgCAQAAAVAgikwQACgHADgHQADgGAEgFAgikwQACgIAEgIQACgFAEgEAhVj9QAagHAIgJQACgCACgEQAHgKAGgTAh6icQgOgLgHgPAhdhiQACgEADgCQADgCACgDQADgDgCgCQABgGgCgFQgDgDgGgFAg+ApQgBgBAAgBQgFgIgGgJQgHgLgIgLQgNgUgDgUQgBgCAAgDAhTBYQAOgRAGgPQABgDAAgCQACgFgCgFAgfEIQAAgGgBgEQgCgSgHgIQgEgFgGgGQgJgHgLgIQgMgHgFgIQgJgKgEgPQgCgKABgLQACgVAKgUQABgDABgCQADgEACgDAgOFHQgCgCgCgCQgBgCgBgBQgBgCgBgBQAAgBAAAAQgDgIgCgJAAIFVQgKgBgLgM");
	this.shape_5.setTransform(-0.7,35.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F6C070").ss(2,1,1).p("AA3kNQAEAEAEAFQAMAJAMAFQAJAFAOACQAFABADACAA3kNQAEAFAEAEQAKAKAOAFQAJAFAPACQADAAAEACQABAAACABIAEABQANAHAHARQAFALgCAJQAAAIgMAMQgJAHgFAHQgCACgCACQgFAGgDAGQgEAEgBAFQgEANAKANQACABABACQACAFAAAFQgBAHADAJQABABAAABQACAIgDAMQAAAFAAAEQgCAHgEAMQgCAEgCAEQgDAFgDAFQgOARgLATQgDAHgCAGQgFAGACAGQAAAAABABQgBADACADQAPAPAVASQACACACABQALASAEAXQACAIAAAHQgBAEAAAEQgBAAAAABQgEAOgIAHQgJAHgKAFQgQAIgJAJQgEADgCADQgDAEgBAHIgBADQAAADAAADQgBAOAAARAgfktQABgEACgDQAIgRARgDQATgFAMATQACACACADQALAXAMARAgfktQAAgDACgCQAJgTARgDQASgFANARQADADACAEQAKAXAMARAB9jqQAPAIAGAPQAEAKAAAHQABALgOAPQgHAFgEAFQgFAFgDADQgFAFgDAFQgCAEgBAEQgDANAKANQADAEAAAEQACAGgBAGQADAGABAIQABAEgBAGQAAAEAAAFQgCAHgEANQgEAJgGAKQgCADgCADQgOAWgMAWQgBACAAABQgFAIAAAHQAOAQAYAVQABABABACQAAABABABQAAAAABABQAOATACAdQAAADAAAEAB+ChQAAABgBACQgDAIgFAFQgLAKgNAHQgMAGgJAHQgGAFgDAGQgCAEgBAGAA7DnQgBAQAAAVQAAABAAABQABANgCAJQgBABAAACQgBABAAABQgBAEgCADQgCADgCACQgBABgBABQgEAEgEAEQgHAGgHADIgLADQgNAAgMgNQgBgBAAAAQAAgBAAAAIgBAAQgBgBAAgBQgBAAAAgBQgBgBAAAAQgBgCgBgBQgBgCgBgBQgBgCAAgBIAAAAQgGgTgBgUQAAgEAAgDQgBgKgBgHQgCgOgHgHQgEgFgIgHQgJgGgJgHQgPgGgFgKQgFgFgDgIQgCgEgBgFQgBgCAAgCQgCgIABgIQACgVAJgTQACgEABgCQAAAAAAAAQAAgBABAAQAQgTAJgQQABgCAAgCQADgFgDgGIgBgCQgFgHgFgIQgIgKgIgMQgNgSgDgUQgBgCAAgCAA4EnQgBACgBACQgCADgCACQgDAFgDADQgEAEgDAEQgHAFgGADAA6EOQAAAPgCAKAgnkZQACgFADgGQABgFACgEAgnkZQACgFACgGQABgFADgEAiLilQgGgJgCgKQAAgBAAAAQgDgKABgLQAAgBAAAAQADglAXgBQAZABAMAAQAGgCAFgBIALgEQAIgDAEgDQACgDADgEAhAj7QAIgDAEgEQACgCADgEIABgBQADgFADgIIABgDAhiiDIgXgRQgBgBAAAAQgBgBgBAAQgJgHgGgIAh6iVIAAAAQgKgHgHgJAhRhpQACgDgCgCQAAgFgCgFQgGgEgJgHAhRhpIAAAAQADgDgDgDQAAgFgCgEQgGgEgJgHAhlhRQADgIAHgGQACgDADgCQAAgBAAAAAhlhRQADgIAGgGQADgDADgDQADgCACgCIAAAAAg/AlQgFgGgFgIQgIgLgJgMQgMgSgDgTQgBgDAAgCIgBgLQAAgEABgDQAAgBAAgBQAAAAAAgBIAFgSAhZBaQARgTAJgQQABgDABgCQACgEgCgFQAAgBgBgBAhmCYQgCgJACgKQACgTAIgSQACgEABgCAgdEBQgBgIgBgFQgCgRgIgIQgEgFgGgFQgJgGgLgIQgNgGgFgIQgGgHgDgJQgCgEgBgEQgBgDAAgCAgdEIQAAgBAAgBQAAgDAAgCAgOE8QgBgBgBgCQgBgBgBgCQgDgEgBgD");
	this.shape_6.setTransform(-0.7,34.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F6C070").ss(2,1,1).p("AgQk4QAFgDAGgCQASgGAOARQACADABADQAJAQAJANIAIALQADAEADAEQAKAKANAFQAIAGAMACQABAAACAAQAaAFAKAUQAFAIABAHQADAJgNAPQgGAGgEAFQgEAFgDAEQgFAFgEAGQgBADgBADQgEANAIANQACADAAAEQABAFgCAGQAEAGABAHQABAEAAAGQAAAEABAEQgCAIgEANQgDAJgGAKQgDAEgDAEQgMAUgNAUQgBACgBABQgFAIgBAGQAAADABADQAQAOAVAQQACABACACQALARAEAYQABAEAAADAgQk4QAFgEAHgBQARgGANAQQADADACAEQAJAPAIAOABpjlQABAAABAAQAEABAEABQASAFAKASQAFALAAAHQABAHgJAMQgIAHgGAIQgBACgCACQgFAHgEAHQgCAEgCAEQgFAMAIAMQABACABABQABAFAAAEQgDAHAFAIQAAABAAABQADAIgCALQAAAFABAEQgCAHgEAMQgBAEgDAEQgDAHgEAGQgMAQgMARQgEAGgCAGQgFAGABAFQABABAAAAQARAPAWATQABABABACQABABAAABQABAAAAAAQAOASABAeQABAHgBAFIgBACQAAABAAABQgBABAAACQAAAAAAAAQgEAIgFAFQgLAJgNAGQgMAGgJAHQgHAEgDAHQgCADAAAEQgCAEAAAGQgBAPABAQQAAASgDALQAAABgBABQAAAAAAABQgCACgCACQgDAFgDADQgEAEgEADQgDADgCACAA4kEQADAEACADQAMAKALAFQAJAGAMADAB+CeQgEAMgIAGQgIAGgKAFQgQAHgLAJQgDACgCADQgDAEgBAFQgBACAAADQgBASAAAUQAAAOgBAIQgBAEgCADQgBADgCACQgBACgDADQAAABgBABQgEAEgEADQgEADgDADIgGADQgVAJgQgTQAAgBgBAAQAAgBAAAAQgBgBgBgBQgBgCgCgCQgCgBAAgCQgCgCAAgCQgFgSgBgUQAAgBAAgBIgBgIQAAgIgBgFQgDgOgHgHQgEgFgJgGQgJgFgJgHQgPgGgFgIQgFgFgDgIQgCgEgBgFQgCgGAAgHQAAgDAAgEQACgWAIgSQABgEACgBIAAAAQAAgBABgBQAQgQALgPQABgCAAgCQADgEgBgEQAAgBgBgBQgFgHgHgJQgJgKgIgMQgNgRgDgUQgBgLABgLQACgVANgNQABAAAAAAIABgBQACgCACgCQADgCACgCQACgDgDgCQAAgFgDgEQgGgEgJgFIgUgPQgBAAAAAAQgBgBgBgBQgBgBgBgBQgFgDgEgFIgIgJQgKgQACgWQAAgBAAAAQACglAXAAQAYABAMAAQAbgEAIgHQAEgEAEgHQAFgJAFgPQAAgBABgBQACgGACgGQAGgLAIgGAgikbQACgHADgGQAFgLAIgFAgtkBQAFgJAFgOQAAgCABgBAhYjrQAbgFAIgHQAEgDAEgHAh6iNQgBAAAAgBQgGgEgEgFAhZhdQACgCACgCQADgCADgCQACgDgEgDQAAgEgCgEQgGgEgKgFAg8ApQgGgIgGgJQgKgKgIgNQgNgRgDgTIAAgBAhjCgQgCgDgBgFQgCgGAAgIQAAgFABgEQACgUAHgRQACgEABgCQARgRALgPQABgDABgCQADgEgCgEAgdD0QAAgGgBgEQgCgRgJgHQgEgEgGgFQgKgGgLgHQgNgGgFgHQgGgGgDgJAgNExQgCgCgCgCQgBgBgBgCQgBgBAAgBQgBAAAAgBQgGgUgBgX");
	this.shape_7.setTransform(-0.7,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F6C070").ss(2,1,1).p("ABsjaQACAAABABQATAFAKAPQAHAJABAGQADAHgIAMQgHAHgFAJQgCACgBACQgFAHgDAGQgDAEgCAFQgFALAEAMQABABABACQAAAEAAAEQgEAGAFAHQABABAAABQAEAIgCALQABAFABAEQgCAGgDANQgCAEgCAEQgDAGgDAFQgNAUgOAVQgBABgBACQgHAHAAAGQgBADACADQARAMAVAPQACABACABQAKARAEAZQADAQgFAKQgDAIgGAEQgLAIgOAGQgLAFgKAGQgHAEgDAGQgDAFAAAHQAAAAAAABQgBASABAUQAAANgCAIQAAACgBACQgBABgBACQgBACgDADQgDAEgDADQgEAEgDADQgIAGgIADIgPAAQgIgCgJgKQgBAAAAgBQAAAAAAAAQgBgBgBgBQgBgBgBgBQgBgCgBgBQgBgBgBgBQgBgCAAgCQgFgSgBgUQAAgBAAgBIAAgHQgBgHAAgEQgDgQgKgHQgEgEgGgEQgKgFgLgHQgNgFgFgGQgJgJgEgPQgCgIABgLQACgXAHgRQABgEABgBIAAAAQABgBAAgBQARgOANgOQAAgBABgCQADgDgBgEQAAgBAAAAIAAAAQAAgBAAAAQgGgHgHgJQgJgJgIgMQgOgQgCgUABsjaQAXAFALAQQAGAHACAGQAEAIgKAPQgGAGgEAGQgDAFgDAEQgFAFgDAFQgCADgBADQgEANAFAMQABAEAAADQAAAFgCAFQAEAGACAHQABAEgBAFQABAFABAEQgBAHgEANQgDAKgGAJQgCADgCADQgNARgNARQgEAGgDAGQgFAGABAEQAAABABAAQARANAXASQABABABACQAAAAABABQAAAAABAAQANARABAfQABAJgCAHQgEAOgJAGQgJAGgKAEQgQAGgLAIQgDADgDADQgEAFgBAIQgBADAAADQAAAOAAAQQABARgDALQAAAAAAABQgBADgDADQgBADgDACQgBABgBABQgDAEgEADQgJAHgJADAgakjQAHgKAMgEQASgHAOAQQACACACADQALASAMAQQAEAHAEAFQALALALAFQAIAHAOACQACABACABAgakjQAIgLAMgDQARgHANAOQADADADAEQALASALAQQAEAHAEAGQAKALAMAFQAJAHANACQACAAACABAgfkZQAAgBAAgBQAAAAABgBIAEgHAgokBQACgFACgHQACgGADgGAgokBQACgFACgGQACgHADgGAiEiMIgSgyQADgmAWAAQAYACAMABQAAAAAAAAQABAAAAAAIARgDQAMgDAEgDQADgDAEgFAhHjkQAMgDAFgEQADgDADgEIABgBQACgFADgGIACgDAhlh3IgWgOQgBgBAAAAQgBAAAAgBQgEgCgDgDAh8iGIAAAAQgEgDgEgDAhPhgQAAgBAAAAIAAAAQACgCgEgCQgBgEgDgFQgHgDgJgGAhPhgQAAgBAAAAIABAAQACgDgEgCQgBgEgDgEQgHgDgKgGAhkhKQAEgIAHgGQACgDADgCQACgCADgBAhkhKQAEgIAGgGQADgDADgCQACgCADgBAg8AqQAAgBAAAAQgGgHgGgJQgKgKgJgMQgNgQgCgUIAAAAQgCgMACgKQAAgBAAAAIAGgSAheBSQASgPANgOQABgCABgCQADgDgCgEAgcDrQgBgJAAgFQgDgNgIgGQgFgFgIgGQgJgEgJgGQgQgFgFgIQgIgHgDgNQgDgKABgOQACgUAHgQQABgEABgCAgPElQgBgCgCgCQgCgCgBgBQAAgBAAAAQgGgVgBgW");
	this.shape_8.setTransform(-0.7,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F6C070").ss(2,1,1).p("AgbkXQAHgLALgDQARgIAOAOQADACACACQAQAWANAVAgbkXQAHgMAMgDQAQgHAOAMQADADADADQAPAWANAVIABABQABABAAABQALALAKAGQAIAHANADQACAAADABQAWAFANANQAGAHADAEQAGAHgJAQQgEAGgEAGQgDAFgDAEQgEAGgEAFQgBADgBADQgFAMADAMQAAADgBADQgBAFgCAEQAFAFACAHQABAEAAAFQABAFABAEQAAAHgEANQgCAKgGAJQgCADgCADQgMATgRAUQgBABAAACQgIAHgBAGQAAACABADQASAKAVAOQACAAACABQAKARADAaQACAKgBAIAA5jvQABABABACQAJALALAGQAJAHANACQACAAACABQABAAABABQATAEAMAOQAHAIACAFQAFAFgHAMQgFAIgFAJQgBACgBACQgGAHgDAHQgDAEgCAEQgGAMACAKQABACAAABQAAAEgBAEQgFAFAGAHQABABAAABQAFAHgBALQABAEABAEQgBAGgDANQgBAEgCAFQgDAFgDAGQgNAQgPARQgEAGgDAFQgGAGABAEQABAAAAABQATALAXAQQABABABACQAAAAAAAAQABAAAAABQAMAPABAhQABAGgBAGIgBAEQgBACgBACQgDAHgGAEQgMAHgNAFQgMAFgKAGQgHAEgDAGQgCADgBAEQAAACAAADQgBASABATQAAAOgBAIQgBACgBACQgBADgCADQgCACgCADQgBABgBABQgEADgEADQgJAIgJACACACRQgEAOgJAFQgJAFgKAEQgRAFgLAIQgDACgCADQgEADgCAGQgBAEAAAFQAAAPAAAPQABASgDALQAAABgBACQgCACgCACQgDAEgEADQgDAEgEADQgIAGgIACIgFABQgOABgMgOQAAAAgBAAIAAgBQAAAAgBAAQgCgCgBgCQgBgBgBgCQgCgBAAgCQAAAAAAAAQgBgCAAAAQgCgKgCgJIgBgTQAAgFgBgEQAAgHgBgEQgDgPgKgHQgEgDgHgEQgKgFgLgGQgOgEgEgGQgJgIgEgPQAAgBgBgCIAAgCQAAgBAAgBIgBgFQAAgEABgFQACgVAGgPQABgFACgCQAAgBAAAAQAQgMAPgNQABgBAAgCQAFgDgBgFQAAAAgBAAQgGgHgHgIQgKgJgIgLQgDgFgDgDIgKgcIAAAAQgBgMABgKQAAgBABAAQADgRALgLQABgCACgBAgkkFIABgBQABgEACgDQAAgBAAgBQABAAAAgBIAEgHAgxjnQAGgIAGgRQABgDAAgCAgxjnQAGgJAGgRQABgCAAgCAhLjaQAOgCAFgDQADgDAEgFAhLjaQAOgCAFgEQAEgDADgEAiFiEIgSgyQADgmAWAAIAAAAQACAAABABQAVACALABIAAAAQADgBADAAIAKgBAhnhxIgVgNQgBAAgBgBQAAAAAAAAIgBAAQgDgDgDgCAh+h/QgEgDgDgCAhWhYQABgBACAAQADgDACgBQADgDgFgCQgCgDgDgDQgIgEgKgFAhWhYQACgBABgBQADgCACgBQACgCgFgCQgBgEgEgDQgHgDgKgGAhchSQABgCACgBQAAAAAAAAQACgCABgBAg7AoQgHgGgHgIQgKgKgIgMQgEgEgCgDAhfBNQARgNAOgMQABgCABgCQAFgDgCgEIAAgBAhrCBQAAgDAAgEQACgXAHgQQABgEABgCQAAAAABAAAgcDhQAAgJgBgEQgDgNgIgGQgFgFgJgFQgJgEgJgFQgRgFgEgHQgIgGgEgNQAAgDgBgCAgbDqQAAgBAAgBQAAgEgBgDAgVESQgDgLgCgKAgNEcQgBgBgBgBQgBgBgCgCQgCgDgBgC");
	this.shape_9.setTransform(-0.7,31.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F6C070").ss(2,1,1).p("ABijIQAZAEAPAMQAGAGAEADQAJAFgIARQgDAGgDAHQgEAFgCAEQgEAFgEAFQgBADgBADQgFAMAAALQAAADgCAEQgCADgCAFQAEAEADAHQABAEABAFQABAFABADQAAAHgDAOQgCAJgGAJQgBACgCADQgMATgSATQgBACgBABQgIAHgCAGQAAACABACQAUAJAUAMQADABACABIAAAAQALANACAjQAAAJgCAHQAAAAAAABQAAAAAAABQgBABAAABQgEAHgGAEQgMAGgNAEQgNAFgJAFQgHADgEAGQgCADgBAFQAAACAAADQAAASAAASQABAOgCAIQAAABgBACQAAACgCABQgBACgDADQgDADgDAEQgEADgEADQgIAGgIACIgfgNIAAAAQgBgBgBgBQgBgCgCgCQgCgCgBgCQgBgBAAgBQgEgTgBgSQAAgGgBgEIAAgDQAAgGgBgDQgCgNgKgGQgFgEgIgEQgKgEgJgEQgRgFgEgGQgGgFgEgIQgBgDgBgEQgBgEgBgEIAAgDQAAgCAAgBQAAAAAAgBIAAgBQAAgDAAgDQAAgBAAAAQACgVAGgPQABgEABgBIAAAAIAAgBQARgKARgLQABgCAAgBQAFgDgBgEQgHgGgHgIQgKgJgJgMQgOgPgCgTIAAgBQgBgLACgKIAGgSQAFgIAIgGQADgCADgCQABgBACAAQABgBABgBQADgDgGgBQgCgDgEgDQgJgCgKgFIgUgMQgBgBgCgBQgDgCgDgCAghkDQABAAAAgBQAHgQAOgGQAQgIAPAMQADACACACQASAVAOAYQAAABABABQAJAKAJAFQAIAJAMACQABABABAAAghkDQAIgSAPgGQAPgHAPALQAEACADADQARAWAOAYQAAABAAAAQAIALALAGQAIAIANACQADABADAAQASAEANAMQAIAHAEADQAGAFgFAMQgEAIgEAJQgBACgCADQgEAGgEAHQgCAFgDAEQgHALAAAKQAAABAAACQgBADgCAEQgFAFAHAFQABABAAABQAFAHAAAKQABAFACAEQAAAGgDANQgBAEgCAEQgDAGgDAFQgNAQgQARQgFAFgDAFQgHAHACADQAAAAAAABQAVAKAXANQABABABACIAAABQAJAPADAcQABACAAADACACOQgEAMgJAEQgJAEgKAEQgRAFgLAHQgEACgCACQgEAEgCAGQgBADAAAFQAAAPABAPQAAASgCAKIAAAAQgBADgCAEQgCABgDADQAAABgBABQgEADgEADQgKAIgJACAglj5IABgBQABgEABgDQABgBAAgBAgqjqQACgFACgFQAAgDABgCAgqjqQACgFACgGQAAgCABgCAh5jSIAOACQAIABAGAAIABAAIAMAAQARgCAGgDQADgCADgEAhQjPQARgCAGgEQADgCADgDIAJgQAiYizQAEggAUAAIABAAQADAAADABAh/jTIAAAAQADAAADABAh9h2QgBgBgBAAQgEgDgDgCIgSgyAhPhXQABgBABgBQACgCgGgBQgCgEgDgDQgJgCgKgFAhlhEQAFgHAIgGQADgDADgCQABgBACAAAg7ApQAAAAAAgBQgHgGgHgHQgKgKgIgKQAAAAgBgBAhiBJQARgKARgMQABgBABgCQAFgDgCgEIAAAAAhsByQACgUAGgOQABgGABgBAhsB5QAAgCAAgCQAAgCAAgBAhoCQQgBgDgBgDQgBgEgBgFAgcDUQAAgEgBgDQgDgQgLgFQgEgEgGgDQgLgEgLgFQgOgEgEgFQgHgFgEgKAgVEIQgFgWgBgTQAAgEgBgEAgNESQAAAAgBgBQgCgCgBgCQgBgBgBgBQgCgCAAgB");
	this.shape_10.setTransform(-0.7,30);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F6C070").ss(2,1,1).p("ABgi/QACABACABQASADAOAKQAJAFAGACQAHAEgDAMQgEAIgDAKQgBACgBADQgFAGgDAHQgDAFgCAEQgIALgDAJQAAABAAACQgCADgCADQgHAFAIAEQABABAAABQAGAGABALQABAEACAEQAAAGgCANQgBAEgCAFQgCAEgCAEQgOARgSARQgFAGgDAEQgIAHACADQAAAAABAAQgBACABACQAVAIAUAKQADABACAAQAJAPACAdQACAPgEAKQgEAHgGADQgNAFgNAEQgMAEgKAEQgIAEgDAFQgDAFgBAIQAAAAAAABABgi/QAXAEAQAKQAHAEAGACQAKAFgGARQgDAGgDAHQgCAFgDAEQgEAFgDAFQgBADgBADQgGAMgDAKQgBADgCADQgCAEgDAEQAFAEADAGQABAEABAFQABAFACADQABAGgDAOQgCAKgGAJQgBABAAABQgMAUgUATQgCACAAABQgKAHgBAFQAVAIAXAMQABABABACQALAMABAkQAAAJgBAHQgEAOgKAEQgKAEgKACQgQAFgMAGQgEACgCACQgGAFgBALQAAABAAABQABARAAAQQABANgCAIQAAACAAABQgBADgDADQgBACgDACQgBABgBABQgEAEgEADQgPALgNgCIgVgNQgBAAgBgBQgCgCgBgBQgBgCgBgBQgBgCgBgBQgEgWgBgTQAAgEAAgDIgBgCQAAgHgBgDQgCgNgKgFQgGgEgIgDQgKgEgJgDQgSgEgDgFQgIgGgEgJQAAgCgBgCQAAgBAAAAQgCgIAAgKQAAgBAAgBQAAgDABgDQABgTAFgNQABgEABgCIAAAAQARgIATgKQABgCABgBQAGgDgCgEQgHgGgHgGQgLgJgJgLQgHgIgEgHQgEgKgBgJIAAgBQgBgLADgKQAEgTAPgLIACgCQACgBADgBQACgCADgBQAAgBAAAAQABgCgFgBQgDgCgEgDQgTgEgUgNQgCgBgBAAQgNgJgGgNIgFghQADglAVABQAEAAADABAgljwQABgEACgEQAIgQANgGQAPgKAQALQACABADACQAOAPALASIAHAMQAAAAABABQAHAMALAHQAIAIAMACQABAAABAAAgljwQABgEACgDQAHgSAOgGQAPgJAQAKQADACAEADQANAOAKASAA3jdQAJAMAJAGQAIAJAMACQABABACAAAA2D1QAAADgDADQgBACgDADQgDADgDADQgEAEgEACQgNAJgMgBAA2C/QAAAPABAOQAAAPgBAKAgvjZQAEgHAEgJQABgEABgDAgvjZQAEgGADgKQABgEACgDAg3jNIAAAAQADgDADgEIACgFAhFjHQAGgBAEgBQACgCACgCAhFjHQAGgBAEgCQACgBACgCAhejFQAEAAAEAAIARgCAhjjGQACAAADABAhjjGQACAAACABIABAAAiBjLIABAAQADAAADABIAXAEAh+hvQgBgBgBAAQgOgIgGgOAhWhQQACgBACgBQADgCADgCQAAAAAAAAQAAgCgFAAQgDgDgDgDQgUgEgTgNAg7AoIAAAAQgHgGgHgHQgLgIgIgLQgBAAAAAAAhBAyQACgBABgCQAFgDgCgDQAAgBAAAAAhtBqQACgSAEgNQABgFABgCIAAAAQARgJATgJAhuBwQAAgBAAgBQAAgCABgCAhrCJQgBgDAAgCQAAgBAAAAQgCgHAAgKAgcDLQAAgGgBgCQgDgPgMgFQgEgEgGgCQgLgEgLgEQgPgDgEgFQgIgGgEgKAgPEGQAAgBAAAAQgCgBgBgCQgDgDgBgCQAAgBAAgBQgEgTgBgRQAAgGAAgE");
	this.shape_11.setTransform(-0.6,28.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F6C070").ss(2,1,1).p("ABZi1QADABADABQASADAQAHQAJAEAHABQAKADgCANQgCAHgDALQgBACgBADQgEAHgEAIQgDAEgDAEQgIAKgGAJQAAABAAABQgDADgDADQgHAEAIADQABABABABQAGAGACAKQABAFADADQABAGgDANQAAAFgCAEQgCAFgDAGQgNAPgTAQQgFAFgEAFQgIAGABACQABAAAAABQAAACAAABQAWAHAVAIQACAAADABQAAAAAAAAQAIAOACAeQACAPgFAJQgEAIgGADQgNAEgNADQgNADgKAEQgHADgEAGQgCADgBAFQgBADAAAEQABAPAAANQABATgCAJQAAABAAAAQgBADgCACQgCACgDACQAAABgBABQgEADgEADQgIAGgIACIghgMIAAAAQgBAAgBgBQgCgCgBgBQgBgBgBgCQgBgBAAAAQAAgBAAgBQgEgWgBgSIgBgMQAAgFgBgCQgDgMgKgFQgGgEgJgDQgKgCgJgDQgSgDgDgFQgHgEgDgHIgCgGQgBAAAAgBQgDgJABgNQABgXAFgOQABgEABgBIAAAAIAAgBQARgGAVgJQABgBABgBQAFgCAAgCQAAgBAAAAQgIgGgHgGQgMgJgIgLQgHgHgEgHQgFgJAAgKIAAgBQgBgLADgJIADgJQAFgNAMgIQADgCAEgCQADgBACgCQACgCgHAAQgDgCgEgDQgLgCgKgDIgTgKQgBAAgBgBQAAAAgBAAQgFgDgDgEQgRgPACgeQAAgBAAgBIAAAAQACglAVABQAFABAEABIALADQAIABAGABIANAAQARAAAGgDQADgBADgDIAGgJIAEgIQACgEACgFQABgCAAgDQACgEACgGQACgEACgDQAGgLAKgFQAQgKAPAJQADABACACQAUARANAaQAAABABABQAIALAHAGQAIAKALADQABAAAAAAIABAAQAYAEASAHQAIADAGACQAMADgEARQgCAGgCAIQgDAFgCAFQgDAFgEAGQgBACgBACQgHAMgFAKQgBACgDADQgDADgEAEQAGAEADAFQACAEABAFQABAFADADQABAGgDAOQgBAKgGAJQgBACgBACQgMASgUARQgCACgBABQgKAHgCAFQAYAGAWAKQABABABACIAAAAQAJAKACAlQAAAKgCAGQgEAOgKAEQgJADgKACQgRAEgMAFQgEACgCACQgFAEgCAHQAAACAAACQAAATABARQAAANgBAHQAAACgBACQgBABgBACQgBABgDADQgDADgEADQgDAEgEACQgHAEgGACAggjyQAGgMALgFQAPgJAPAIQAEACADACQATASANAbQAHAMAJAHQAIAKALABAgojhQACgFACgFQACgEACgDAgtjTQACgEACgGQABgCAAgCAhUi7QARAAAGgCQADgCADgDAiDjCIABAAQAEABAEABAiChoQgFgDgEgEAhpg1QAFgNAMgIQAEgCADgCQACgCADgBQACgBgIgBQgDgCgEgDQgKgBgKgEAg7ArQAAgBAAgBQgIgGgHgGQgLgIgJgKQAAgBAAAAAhoBBQARgGAVgJQABgBACgCQAFgCgBgCAhwBrQACgWAEgNQABgGABgBAhuCBQAAgBAAgBQgCgIAAgLQAAgBAAAAAgcC/QAAgDgBgCQgDgPgNgEQgEgDgHgDQgLgCgLgEQgPgDgEgEQgHgEgDgIAgWD1QgBgCAAgBQgDgUgBgQQAAgCAAgBAgOD9QgBgBgBgBQgBgBgCgCQgCgCgBgB");
	this.shape_12.setTransform(-0.5,27.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6C070").ss(2,1,1).p("ABXirQACAAACAAQASADARAFQAKADAIAAQALACAAANQgBAHgDALQAAADgBACQgEAIgEAHQgDAFgDADQgIALgJAIQAAAAgBACQgEACgDADQgJADAKADQABABAAABQAHAFADAKQACAFADADQABAFgCAOQgBAFgBAEQgDAHgFAHQgLAOgTANQgGAFgDAEQgJAGABACQAAABABAAQgBACAAABQAYAFAUAGQADAAACABIAAAAQABAAAAABQAHANACAeQABALgCAIABXirQAXACATAFQAJACAHABQAOACgCASQgCAGgCAHQgCAGgCAEQgDAGgEAFQgBADgBACQgHAMgIAIQgCADgEACQgDADgEADQAFAEAEAFQACAEABAEQACAFADADQACAGgCAPQgCAJgFAKQgCADgDADQgKAPgUAQQgCABgBABQgLAHgCAFQAZAFAWAHQABABAAACQAJAJABAmQABAJgCAHQAAAAAAAAIgCAEQAAABAAABQgEAHgHADQgNADgOACQgMADgKADQgIADgEAFQgBADgBADQgBADAAAEQAAABAAABQAAAPABANQABARgCAKQAAACgCACQgCACgDACQgDAEgDADQgEADgEACQgHAFgIABQgPAEgPgQQgBgBgBgBQgCgBgBgCQgBgBgBgBQgBgBAAgCIAAAAQgEgWAAgSQgBgFAAgFQgBgEAAgDQgEgOgNgEQgFgDgGgBQgMgCgKgEQgRgBgDgEQgEgCgDgEQgEgGgCgJQgCgEAAgGIAAgBQAAgEAAgEQAAAAAAgBQABgXAEgNQABgDAAgCQABAAAAgBQARgEAWgHQACgBABgBQAHgCgCgDIAAAAQgHgGgIgGQgMgIgIgJQgBAAAAgBQgPgOgBgTIAAAAQAAgLADgKQAFgSAQgKQADgCAEgCQABAAAAAAAApjgIAKATQAHAMAIAHQAHALALACQABABACABAgpjXQACgEACgFQAGgQAMgHQAQgLAPAHQADABACACQAOAKAKAOAgpjXQABgEACgEQAHgSANgHQAQgKAOAGQAEACAEACQAMAKAJAOAAzjNQAAAAAAABQAHANAJAHQAHAKALACQABABABAAAB+CBQgEAJgIADQgKACgKABQgRADgMAFQgEACgDACQgEADgCAFAAzCrQABASABARQAAANgBAHQAAABgBABQAAAAAAABQAAACgDADQgCACgDACQgBABgBABQgDADgEADQgJAHgKABAgujKQABgDACgEQABgDABgDAgujKQACgEABgEQABgCABgDAhjizQAbADAJgDIAAAAQAAAAAAgBQAIgDAGgNIADgGAiMhmIgCgCQgJgIgDgNQgCgJAAgKQAAgDAAgDQADgmAUACQAGABAFABIAQAEQAEABADAAAhqi0QADABADAAIABAAAiFi6IABAAQAFABAFABAiChgQgCgBgBAAQgEgCgDgDAiChgQgBgBgBAAQgEgCgEgDAhMhOQABgBgHAAQgEgCgFgCQgWgDgRgKAhNhNQAAAAABAAQAAAAAAgBQACgBgIgBQgEgBgEgCQgWgDgSgKAhYhHQAEgCADgCQABAAAAAAQACgBABgBQABAAAAgBAg8ApQgHgFgIgGQgMgIgJgLAhsA8IABAAQARgEAWgIQACgBACgBQAHgCgCgDIgBAAAhyBlQABgVAEgNQABgFAAgCAgcC2QgBgFAAgDQgDgMgLgFQgGgDgJgCQgKgCgJgDQgTgCgDgEQgEgCgDgDQgEgFgCgHQgCgGAAgHAgXDoQgBAAAAgBQgDgUAAgQQgBgHAAgGAgRDwQgBgBgBgCQgDgCgBgD");
	this.shape_13.setTransform(-0.4,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F6C070").ss(2,1,1).p("ABTihQABABACAAQASACASADQALABAKgBQANABABANQAAAIgCALQgBACAAADQgEAJgEAHQgDAEgDAEQgJAKgLAHQgBABgBABQgFACgDACQgKADAKACQABABABABQAIAFADAJQACAFAEADQABAFgBAPQgBAEgBAEQgDAHgDAFQgMAPgVAOQgGAFgEADQgKAGABACQABAAAAAAQgBACABAAQAYAEAUAFQADAAADAAIAAAAQAIAIABAoQAAADAAADQAAAFgBAEQAAABAAAAIgBACQgEAMgKADQgKABgKABQgRACgNAEQgEACgCACQgHAEgBAKQAAAAAAABQACATAAAQQABANgBAHQgBABAAABQgBADgCACQgCACgDACQgBABgBABQgDADgEACQgBABgBAAQgBABgBABQgGAEgGABIghgMQgBgBgBgBQgBgBgBgBQgDgCgBgCQgBgBAAgCQgCgTgBgQQAAgJgBgFIAAgCQgBgCAAgCQgDgNgOgEQgFgCgHgCQgMgBgKgCQgRgCgCgDQgGgCgEgGQgDgFgCgHQgCgIABgLQAAAAAAgBIABgTQABgKACgGQABgFAAgBIAAAAIABAAQARgCAYgGQABgBABgBQAJgBgCgDIAAgBQgBAAgBgBQgHgEgHgFQgMgHgJgKQgFgFgEgFIgDgFQgEgIAAgKQgBgLADgJQAGgSARgKIACgBQACgBADgCQACAAACgBIABgBQACgBgJAAQgEgCgEgBQgYgCgRgJQgCAAgBgBQgGgDgEgEIgNgnQAAgDABgDQAAgBAAAAQACglAUACQAAAAABAAQADABADABIAHACQAMADAHACQABAAAAAAIAWACQAJAAAEgBQACgBACgBQAIgFAHgTQABgBABgCQABgFADgFQAAgDACgCQAGgQALgIQAQgMAPAGQADABADABQAWANALAdQABACABACQAGAMAHAHQAIALAKACQABAAABAAQAXACAUACQAJACAJgBQAQABgBASQgBAGgCAIQgBAGgCAFQgDAGgEAFQgBACgBACQgHAMgKAIQgEACgEACQgFADgEACQAGADAEAGQADADABAEQADAFADADQACAFgCAPQgBAKgGAKQgBACgBABQgLAQgXAQQgBABgBABQgNAHgCAEQAaAFAXAEQAAABABABQAAABABABQAGAMACAfQAAAFAAAEAgpjOQAAgCABgDQAHgRAMgIQAPgLAPAGQAEABAEACQAVANALAeQAAABABABQAGAKAGAHQAHALALADQABABACAAAB/B5QgBACgBACQgEAHgHACQgNACgOACQgMACgLADQgIACgEAFQgDAFAAAHAAxCjQAAABAAABQABAPABANQABASgCAIQAAABAAAAQgBACgCABQgBACgDACQgDAEgEACQgCADgDABQgHAFgHACAgvjBQABgCABgCQACgEACgFAhPimQAJAAAFgCQABAAACgBAiHixQAEABADABAiEhYQgBAAgBgBQgGgDgFgEAhThKQgFgBgEgCQgYgCgQgJAhWhEQACgBADgBQACgBACgBAg8AqQgBgBgBgBAhFAwQACgBACgBQAHgCgCgCIAAAAAhMAfQgNgHgIgKQgFgFgEgFAhzBOQABgIACgHQAAgFABgCQASgCAYgGAgdCqQgBgDAAgCQgDgMgLgEQgGgCgJgCQgLgCgJgCQgTgBgDgEQgGgCgDgFQgDgEgBgGQgBgBAAgBAgSDmQgCgBgBgBQgBgCgBgBQAAAAgBgBQAAgBAAgBQgDgWgBgRQAAgHgBgE");
	this.shape_14.setTransform(-0.3,25.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F6C070").ss(2,1,1).p("ABNiYQACABACAAQASABAUABQALAAAMgCQAOAAADANQABAIgCAMQAAACgBADQgDAJgDAHQgCACgBACQgIAMgNAHQgEACgFACQgFACgFACQAHADAEAFQADADABAEQADAFAEADQACAFgBAPQgBAKgGAKQgBACgBABQgMAOgWAOQgGAEgFADQgKAGABACQAAAAABAAQgBABABAAQAZADAUADQADAAADAAQABABAAABQAFALACAgQAAAFAAADQAAAGgBAEIgBABQgBADgBACQgEAIgHABQgOABgOACQgMABgLADQgIACgEAFQgCACgBAEQAAADAAADQACATAAAPQABANgBAHQAAABAAAAQgBADgCACQgCABgDACQAAABgBAAQgBABgBABQgDADgEADQgBABgBABQgBAAgBAAQgZAPgUgWQAAgBgBAAABNiYQAXACAWAAQAKAAAKgBQASgBABATQgBAGgBAIQgBAGgCAFQgCAGgDAFQgEAEgDAEQgKAKgOAGQgCABgBABQgFACgEABQgLADALABQACABAAABQAJAEADAJQADAFAEADQACAFgBAPQgBAEgBAEQgCAHgEAGQgLAPgXAPQgCABgBABQgOAIgCADQAcADAWACQABABAAABQAHAGABApQAAADAAADAAqjHIABADQABAEACAFQAGAOAHAIQAHALAKACIABAAAArjEQABADACAEQAGANAGAIQAHAMAKADQABABABAAAgSjlQAMgGAMADQADABADABQASAJAMAWAgSjlQALgHANAEQAEAAAEACQARAKALAVAB+ByQgDAOgLACQgKAAgKABQgRABgNAEQgFABgCACQgGADgCAGQgBADABAEQABAQABAMQABASgBAIQgBADgDADQgBABgEACQgDADgDACQgBACgCABAgbjeQACgCABgBQADgCADgCAgbjeQABgBABgBQADgCAEgDAgxi0QABgDABgDQADgGACgHQABgDABgDAgxi0QABgCABgDQACgHADgIQABgCABgDQAGgKAHgHAg6ikQAEgGAFgKAhSicQAJABAFgBQAFgBAFgHAhSicQAJAAAFgBQAFgBAFgGAiDinQARAFAJADQAGABAFAAIAMACAiRhXQgPgMAAgcIAAgBQAAgDABgCQAAgBAAgBQACgkAUACQAAAAAAAAQADABADABAiJipQADABADABAiGhQQgCgBgBgBQgFgCgDgDAiGhQQgCgBgBAAQgEgCgEgEAhlhIIghgIAhuACIgFgOQAAAAAAgBQAAAAAAgBQAAgBAAgCQAAgLADgJQAGgSASgJIABgBQADgBACgBQADgBACAAIABgBIAAAAQABgBgJAAQgEgBgFgBQgEAAgEAAAhXhBQADgBADgBQACgBACAAAhMhFQAAgBgIAAQgFgBgFgBQgEAAgDAAAg9AqQAAAAAAgBQgIgEgIgFQgNgHgIgJQgIgGgEgIAhHAvQACgBABAAQAHgBAAgDQAAAAAAAAQgIgFgIgFQgNgHgJgJQgHgHgEgHAhHAvQADgBACAAQAGgCgBgCAh2BtQgBgHAAgJQABgWACgMQABgHABAAQARAAAagFAh2BtQgBgHAAgJQABgYACgMQABgFABAAIAAAAAhwB8QgDgEgCgGQgBgCAAgDAhwB8QgEgFgBgHQgBgCAAgBAgeChQAAgEgBgCQgDgLgMgEQgGgCgJgBQgLgBgJgCQgUAAgCgDQgGgCgDgFAgcC9QgBgHAAgGQAAgKgBgFQAAgDgBgCQgDgNgPgDQgFgCgHgBQgMgBgKgBQgRgBgDgCQgFgDgEgFAgcC9QgBgJAAgHQAAgIgBgEAgaDPIgCgSAgWDZQgBgBgBgBQgBgCgBgBQAAgDAAgCAgWDZQgEgEAAgCQAAgCAAgCAAdDkQgaAPgVgWQAAAAgBgBQAAAAAAgBQgCgBgBgBQAAAAAAAAAgTDbQgCgBgBgB");
	this.shape_15.setTransform(-0.2,24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F6C070").ss(2,1,1).p("ABJiOQACABACAAQARABAVgBQAMgBANgEQARgBAEAOQACAHgBANQAAACgBADQgDAKgFAIQgDAEgDADQgKAJgRAGQgBAAgCABQgGACgFABQgLACAMAAQABABABABQAJAEAFAJQACAFAFACQACAFgBAPQAAAFgBAEQgCAEgCAFQgKAQgbAQQgCABgBABQgQAIgCACQAeABAWABQAAAAABABQAFAFACAoQgBABABAAQAAABAAAAIAAAHQgBAFgBAEQgBAEgBADQgFAIgIABQgKAAgKABQgRAAgOADQgEABgDACQgHADgBAJQAAABAAACQACAUABAOQAAANAAAGQgBACAAABQgBACgCACQgCABgDACQgDACgDADQgEADgDACQgLAGgLgBIgEgBQgKgDgIgJQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQgBgBAAgBQgCgBAAAAQgDgDAAgCQgBgUgBgOQgBgMAAgFQgBgCAAgBQgDgLgNgEQgGgCgKgBQgLAAgIgBQgVAAgCgCQgEgBgCgCQgGgFgCgKQgCgIAAgLABJiOQAXACAXgDQALgBALgCQATgCADATQAAAHAAAIQgBAGgCAGQgDAHgEAFQgBABAAABQgJAMgPAGQgEACgGACQgGABgFACQAHADAEAEQADADACAEQADAFAEADQADAFgBAPQAAAJgGAKQAAAAAAAAQgLAQgaAOQgHAEgEAEQgLAFABABQAAAAAAAAQAAABAAAAQAbACAUABQADgBADAAQAAABABACQAEAKACAgAADjeQAFAAAEACQAWAJAKAgQAAABABABQAFALAEAHQAHANAJADQACABABAAAADjeQADAAADABQAYAJAKAfQABACABACQAEANAHAIQAHAMAJACQABAAAAAAAAAjfQABAAACABQAAAAAAAAAB8BzQgFAHgHACQgOAAgOAAQgMABgLACQgJACgEAFQgDADAAAGQAAACAAACQABAPABAMQABASgBAIQAAABAAABQgBABgCACQgBABgDACQgBAAAAABQgBABgBABQgCACgCABQgCABgBABQgNAJgNgBACABjQgBAKgDAGAgsi7IAHgOQAEgHAGgFQANgLAOABQABAAACABAgljJQAEgGAFgEQANgNAPABAiCicIAVAGQAAAAABABQAAAAABAAQAHABAGACIAIABQAKABAGAAQAKgCALgbQADgGACgIAhWiRQAKABAGgBQAKgBALgaQACgHADgIAhghCQgbAAgNgGQgCgBgBAAQAAAAgBAAQgWgMAAgiQAAgDABgDQgBAAABgBQACgkAUACIAAAAQAFACAEACAiLigQAFACAEACAhuAIIgHgSQAAgCAAgCQAAgLAEgJQAGgRATgJQABAAACgBQACgBACAAQADgBACgBQABgBgCAAIgCAAQgCAAgEAAIgCAAQgFAAgEgBAhVg9QACgBACgBQACgBADAAQAAgBgBAAAhXhBQgEAAgEgBQgBAAAAAAAg9ArIAAAAQgFgDgFgCQgEgCgDgCQgCgBgCgBQgLgGgIgIQgFgFgEgFAg9ArQAAAAAAgBQgFgCgFgCQgEgCgDgCQgCgBgCgBQgLgGgHgHQgGgGgEgFAh1AwQARACAcgEQACAAABAAQAIgBAAgCAh1AwQARACAcgDQACgBADAAQAHgCgBgBAgeCWQgBgCAAgBQgEgMgPgDQgFgCgHAAQgNAAgKgBQgSgBgCgBQgEgCgCgCQgGgEgCgJQgDgIABgNIAAAAQABgXABgLQABgGABgBAh5BZQAAgZACgLQABgEABgBAgYDOQgBgBAAAAQgBgCAAgBQgCgYgBgOQgBgKAAgEAgUDSQgBgBAAAAQgCgBAAgBQgBgBAAAA");
	this.shape_16.setTransform(-0.1,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F6C070").ss(2,1,1).p("ABDiEQACABACAAQASAAAWgDQANgDAOgEQASgCAGANQADAIAAANQgBADAAADQgCAIgDAGQgEAGgFAEQgLAKgTAEQgCABgCABQgGABgGABQgMABAMAAQACABABAAQAJAEAGAIQADAFAEADQADAEAAAPABDiEQAXABAZgFQAMgCAMgDQAVgDAEAUQABAGAAAJQAAAGgCAFQgCAFgCAEQgCADgCADQgJALgSAGQgFACgGABQgHABgGABQAHADAFAEQAEADACAEQADAFAFACQADAFgBAPIAAABQAAAKgFAJQgEADgFAFAAZjIIAMAUIACAFQABACABADQAFAPAFAIQAHANAJACAAnivQABABAAACQAFAOAFAIQAHAOAIADQABABABAAAAAjVQADABACAAQAMADAIAJAAAjVQAEAAAEACQAKADAHAIACEgTQAAAEgBAEQgDALgKAIIgDAEQgLAJgPAIQgHADgFADQgLAGAAAAIAAAAIAAABQAcAAAUgBQADAAADgBQABABABACQADAKABAiQABAGgBAEIAAADQAAACgBABQgBAFgCACQgEAIgIAAQgPgBgNABQgGAAgGABIgEAAQgEAAgEABQgEABgDABQgFADgCAEQgCAEABAFQACATABAOQAAANAAAGQgBADgDADQAAAAgCABQgBABgCABQAAAAAAAAQgBABgBABQgDACgCABQgBABgBABQgPAJgNgCIgUgMQgBgBAAAAQgBgBAAAAQgBgBgBgBQgCgBgBgBQgBgCAAgBIAAgBIgCgSQAAgJAAgGQgBgMgBgFQAAgCAAgBQgEgMgQgDQgGgBgHAAQgNAAgKAAQgSABgCgBQgEgCgDgDQgFgEgCgHQgBgEgBgFQgBgFABgHQAAgXABgLQABgGAAgBIABAAQARAEAegCQABAAACAAQABAAABAAQACAAACgBQAEgBgBgBQgKgEgIgEQgOgGgJgJQgGgEgDgGIgHgRQAAgCAAgCQAAgLAEgJQAHgRATgIQACgBACAAQABgBACAAQADgBACgBABCApQAgAAAWgBQAAAAAAAAQAGAEABArQAAAGgBAEAB9BnQgDAPgMABQgLgBgKAAQgKAAgJABABzAMQgKAJgQAIQgCABgCABQgFACgDACQgJAFgCABAA6B4QgJABgDAFQgBABgBACQgCAEAAAFQACAQABALQABASgBAIQAAACgDADQgBAAgBABQgBABgCABQgEADgDACQgDADgEACQgMAGgLgCAhKiFQALgBALgaQADgHADgIQAFgPAJgKQAHgHAIgDAhKiFQALgBAMgbQACgGADgHQAGgSAKgJQAGgGAHgDIAJgCQAFgBADAAAibhMIgHgRQgCgKAAgNQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAEgeAPABQACAAABAAQAEABACABQARAHAIADQAcAGAJAAAiRiXQABAAACAAQADABADABAiLhAQgCgBgBgBQgIgDgFgHAiLhAQgCgBgBAAQgIgEgFgHAg+ArQgKgEgIgEQgNgGgJgIQgGgFgEgGAhVg5QACgBABgBQADgBACAAIAAAAQAAgBgKABQgFAAgFAAQgBAAgBAAAhNg8QAAAAgKAAQgGAAgGAAQgcAAgMgEAhHAuQAEAAACgBAggCNQAAgDAAgBQgEgKgNgDQgGgCgKAAQgLAAgJAAQgVABgCgCQgEgBgDgDQgGgFgCgJQAAgDgBgDQgBgFAAgHQABgaABgKQABgFAAAAIAAAAAgeCtQAAgLAAgIQgBgJgBgEAgWDHQgCgBgBgBQgBgBgBgB");
	this.shape_17.setTransform(0.1,22.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F6C070").ss(2,1,1).p("ABmg6QAMAEAHAJQADAFAFACQAEAEAAAQQAAAbgsAUQgZAMABAAQAhgCAWgDQAEACABAtQABAegSABQgdgEgXACQgSACACAQQAEAogBAMQAAACgDADQgCABgDACQghAbgZgbQgDgCgBgBQgDgDAAgCQgCgxgCgEQgFgQgcACQgqACgCAAQgRgFAAgfQABgoABAAQASAGAfgBQAQgBgDgBQgJgEgJgDQgpgRABgcQACgfAegNQAHgDAFAAQACgBgMABQguACgLgEQgYgKADgqQADgoAWAIQAQAIALAEQAUAIARAAQAOAAAOgpQAOgpAgAAQAeAAALApQALApARAAQAbAAArgPQAfgFAAAlQABAlg1AIQgHABgGAAQgOABgGgD");
	this.shape_18.setTransform(0.3,21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F6C070").ss(2,1,1).p("AimhtQADgoAWAIQAvAUARAAQAOAAAOgpQAOgpAgAAQAeAAALApQALApARAAQAbAAArgPQAfgFAAAlQABAlg1AIQgHABgGAAQAMAEAHAJQADAFAFACQAEAEAAAQQAAAbgsAUQgZAMABAAQAhgCAWgDQAEACABAtQABAegSABQgdgEgXACQgSACACAQQAEAogBAMQAAACgDADQgCABgDACQghAbgZgbQgDgCgBgBQgDgDAAgCQgCgxgCgEQgFgQgcACQgqACgCAAQgRgFAAgfQABgoABAAQASAGAfgBQAQgBgDgBQgJgEgJgDQgpgRABgcQACgfAegNQAHgDAFAAQACgBgMABQguACgLgEQgYgKADgqg");
	this.shape_19.setTransform(0.3,21.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F6C070").ss(2,1,1).p("ABEiSQADACADABQALACAOAAQAQABATgFQAGAAAEACQAIAEADAPQAAADABAEQAAADAAADQABALgCAIQgFAQgVAKQgGADgHACQgHACgFABQAKAFAEAKQACACABABQACACACACQACAFAAAPQgBAEgBAEQgDAOgPANQgIAIgLAHQgVAMACACQAAAAABAAQgBABAAABQAgADASABQABABABAFQABADAAAEQAAABAAABQABAMgBAUQAAAGgCAFQgBAIgDAFQgFAFgGABQgLABgKABQgNACgLADQgMADgCAKQAAACAAADQADAegCAPQgBAFgBADIAAABQgBABgCACQAAAAAAABQgBAAgCABQgBABgCACQgUAPgQgGQgDgBgEgCQgIgEgGgHQgBgBAAAAQgCgCgBgBQgCgBAAgCQgBgBAAgCQgBgIgBgHQgBgMAAgIIgBgNQAAgEAAgCQgBgDgCgDQgHgKgUgCQgFAAgEgBQgeAAgCgDQgFgDgEgFQgFgIgBgOABEiSQADACADABQAKACAMAAQARABAUgFQASAEAEARQAAACABACQAAACAAABQAAATgEAJQgGAPgXAJQgEACgDABQgHACgFABQgMADALAAQAGADAFAFQACADACADQACAFAEADQADAEgBAQQAAADgBADQgCAKgJALQgJAMgQALQgRAJgCADQAFABAGAAQAXACAPABQABACABAGAgEjkIAIAAQAAAAABAAQAYAHALAZIACAGQAAABABABQAAACABABQAHAVAIAKQAEAFAFADAAsi5QAHAXAJAKQAEAEAEACAB6BFQAAADABADQAAALAAANQgBANgDAIQgCACgBADQgEAGgHACQgHAAgGABQgRABgPAEQgJACgDAHQgBABgBACQAAADAAAEQABAXgBAOQAAAFgBAEQAAADAAADQgBABgCACQgBABAAABQgBAAgBAAQgBABgBABQgYATgSgKQgEgCgDgCQgFgEgEgFQgDgCgBgBQgCgCAAgCQgBgBAAgBQgBgMgBgKQAAgIgBgGAgpjGQAEgJAGgGQAMgOAPgBAgpjGQAEgKAHgGQALgNAPgBAgsjBQABgBABgBQAAgCABgBAgsjBQABgBABgCQAAgBABgBAg5ilQADgEADgGQADgIAEgKAhWiYQAKABAHgCQAGgCAGgKQADgDACgFQAEgJAEgLAhWiYQAKAAAHgCQAGgBAGgKAhohFQgVgCgJgFQgBgBgBgBQgVgMACgnIAAAAQADgkASACQAVAGAKACQAFABAFABIAHABAhdAVQgDgCgDgDQgPgOAAgQQAAgQAHgMQAGgLANgHQAGgEAFgBIABAAQgBgBgDAAQgBABAAAAQgCgBgCAAIgMgCQgDgBgEAAAhdAVQgDgCgBgBQgRgPgBgRQAAgQAGgLQAHgMAOgHQAGgEAGgBAhhhEQgDgBgDAAIgBAAAhRhBIgBAAQgBAAgCgBAhWAaIgHgFAg7AqQAAAAAAAAQgJgFgHgEQgGgDgFgEAg7AqQAAAAAAgBQgJgEgIgFQgFgDgFgDAhyAxQARABAbgEIABAAQALgCgBgCAhyAxQAAAAABAAQAQABAZgEQAMgCABgCAhyAyIAAAAIAAgBAhzA8QAAgHABgDAhzA8QAAgCAAgCQAAgEABgCAggCbQAAgDAAgCQgCgGgFgEQgIgHgPgBQgHAAgGgBQgagBgCgDQgHgDgEgIQgDgIgBgLIABgIQAAgSACgL");
	this.shape_20.setTransform(-0.1,24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F6C070").ss(2,1,1).p("ABFivQAGAHAHAEQAKADALADQANAFAOgBQAFABADACQAFAHABAUQAAADAAACQAAABABACQABAJgBAJQgBAQgRANQgFADgGADQgGADgFADQAIAGADAKQAAACACACQABACACABQABAGgBAOQgBAHgDAHQgDAIgGAJQgIAOgMAMQgNAJgCAEQAFACAFABQAVAGANAEQACADABAIIABAFQAAADAAAEQAAALgBANQgBANgEAIQgCADgCADQgEAEgFACQgKACgIAEQgLAEgJAFQgLAGgBALQAAABAAABQABAegEAQQgBAFgBADQAAAAAAABQgCACgCACQgBAAAAAAIAAAAIgBABQgBABgCABQgBAAgBABQgUAPgQgJQgDgCgDgCQgIgFgGgIQgDgCgBgCQgCgCAAgCQgBAAAAgBQgBgJgBgIQgBgNAAgJIgBgKQAAgDAAgCQgBgGgFgFQgGgIgOgDQgHgCgGgBQgXgDgCgFQgHgEgDgJQgEgLABgPQACgWACgMQABgGABgBQAAgCABAAQAOgDAWgIQALgCgBgEQAAAAAAgBQgIgFgHgFQgLgIgJgJAAcjxIAMANIAFAJQACAGACAGQAHAUALALQAAAAABAAQAAABABAAQAGAIAHAEQAJADAKACQAOAHAPgCQAMAIACATQAAADAAAEQABAPgBAJQgEAPgSAMQgDACgDABQgFADgFADQgLAEAJACQAEADADAFQACADABAEQACAFADADQABAFgBAOQAAAGgCAFQgFALgKAMQgGAJgJAIQgRAMACAEQABAAAAAAQAAACABABQAcAIAQAFQABACABAGAAtjbQACAFACAFQAIAWAKALAgkjlQAGgKAIgGQATgPARAHQAIAGAGAGAgkjlQAGgKAIgFQATgQARAIQAIAFAGAGABvCPQgEAGgGADQgGABgFADQgOAFgMAGQgIADgCAGQgBACgBADQAAADAAADQAAAXgDAOQgBAFgBAEQgBADgBACQgBACgCACAB5BVQAAAOgCAUQgBAGgCAFQgCAIgDAFAh4i4QASAEAKgBQATADAMgIQADgBADgFQAFgFAEgKQAEgKAGgMAh4i4QASAEAKAAQAUACAKgHQAEgCADgFQAFgFAEgLQAEgKAGgLAhohVIgTgKQgBAAAAAAQgBgBgBAAIgSgrQAAgEAAgFQAAgBAAAAQADgjARAAIABAAIAAAAQABAAACAAAh7i4QABAAACAAAhPhLQAAAAgBAAQAAgBgCAAQgGgEgIgDQgEgBgEgBAhWhEQAFgEAFgCQABgBgEAAQgBgBgBAAQgHgEgHgDQgFgBgEgBAhsgUQgBgQAGgMQAFgMAMgIAhsgUQgBgPAFgMQAFgNANgIAg3AoQgHgFgIgGQgLgIgJgJIAAAAQgBAAAAgBQgPgNgCgSIAAAAAhmA7IAAgBQAQgEAWgIQABAAAAAAQAKgCgCgEAgfCxQAAgEAAgDQgBgDgBgDQgGgLgTgFQgEgBgEgBQgbgDgDgGQgEgDgDgGQgGgLACgTQABgSACgLQABgHABgDAgaDjQgCgMgBgKQgBgKAAgIAAmD1QgXATgTgNQgDgCgEgDQgEgEgFgFQgCgDgBgBQgDgDAAgCIAAgB");
	this.shape_21.setTransform(-0.4,26.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F6C070").ss(2,1,1).p("AAikHIAKAOIAFAKQACAEACAFQAKAWAMAKQAAABABAAIADADQAFAGAFAEQAHAFAIAFQAMALAJACQAEALACAQQAAACAAACQAAACAAACQACAPABAJQAAAPgOAQQgCACgDACQgEAEgFAEQgIAFAFAEQADAEACAFQABAEAAADQABAFADADQAAAGgCAOQAAAEgBACQgFAOgJANQgFAKgGAJQgNANADAGQAAAAABAAQAAACABACQAaANAMAJQACADABAKQAAAPgDATQgCAGgCAFQgCAGgDAFQgEAEgEADQgJAFgHAGQgIAGgHAHQgJAHgBALQgBADAAAEQAAAWgGAPQgBAFgCAEQgBADgBACQgBABgBACIgBABQgBAAgBABQgBABAAAAQgCABgBABQgUAOgQgMQgEgCgDgDQgHgGgGgIQgCgCgCgCQgBgCAAgBQgBgBAAgCQgCgIgBgIQAAgHgBgGIgBgTQAAgDAAgCQgBgHgDgFQgGgJgMgFQgGgDgGgDQgVgFgDgIQgGgFgCgJQgDgLABgPQACgVAEgOQABgGABgBQAAgCABAAQANgIARgLQAJgEgBgEQAAgBAAAAQgHgGgGgHQgKgIgJgKQgBAAAAgBQgOgNgDgSQgCgQAFgMQADgNAKgJQAFgFAFgDQAAAAAAAAQACgBgEgBQAAgBgBAAQgDgGgGgFQgGgCgFgDIgPgLQgBAAAAAAQgBgBgBgBQgTgPACgmIAAAAQADgkASAAQAUACALgDQARAAAKgLQADgDAEgHQAEgGADgJQADgIAFgIQABgCACgCQABgCABgCQAFgHAJgEQATgMARALQAHAHAFAHgAgckJQAGgHAIgDQATgNARAMQAGAHAGAGABPjCQAFAFAEAEQAJAFAJAGQALAKAJACQADACABADQAAAHABAQQAAABAAABQAAABAAABAAxjvQADAFACAGQAIAVAOAKACDh+QABACAAACQACAKABAIQACAQgNAQQgEAEgFAEQgFAEgEAEQAFAHABALQAAACABABQABACABACQAAAGgCAOQgBAHgCAEQgDAMgGAKQgGAPgJAOQgJAJgBAFQAEACAFADQATAJALAIQADAGAAARQAAALgBANQgCAMgFAIQgCADgCADQgEAHgFAFQgGACgEAEQgKAJgKAIQgGAEgDAHQAAABgBACQAAABAAABQAAAdgGARQgCAFgCADIAAABQgBACgDACAAqEPQgBAAAAABQgBAAAAAAAghkBQABgDACgCQABgBABgCAgwjiQAEgGADgIQADgJAFgIAhxjMQAVABAKgDQAQABALgMQADgDAEgGAhMhTQABgBgDgBQgBAAgBgBQgCgGgHgFQgFgCgFgDAhVAGQgPgNgCgSQgCgQAEgMQAEgNAKgJQAFgFAFgDAg0AnQgGgGgHgHQgLgJgJgLAhbBEQAPgJASgMIAAAAQAIgDgCgFAgfDIQAAgEAAgEQAAgEgCgDQgEgMgSgHQgEgCgDgCQgZgGgCgIQgEgEgDgGQgEgMACgTQABgRAEgMQAAgHACgDAAnERQgYATgTgQQgDgCgEgDQgEgFgEgFQgCgDgCgBQgCgDAAgDQgDgMgBgLQAAgFgBgE");
	this.shape_22.setTransform(-0.7,29.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F6C070").ss(2,1,1).p("AghkaQADgGAEgGQAIgJALgEQAWgJAOAPQAAABABAAQAUAfAHATQAAABABAAQAJATAPAMQADACACACQAEAEAEAEQAHAHAHAJQAIAOAEAGQACADgBADQgFALABARQAAADABACQAAACABACQACAJACAIQAGAQgKATQgCAFgEAFQgEAFgFAFQAEAJgCALQABABAAACQABACAAACQgBAHgDAMQgBAFgCAEQgDAOgFAOQgFAPgFAQQgGAJAAAGQAEADAEADQAQANAKALQACAGAAAKQAAACABABQAAABAAACAA5j6QALAUAOAKQACADADADQAEAFAEAFQAGAGAGAIQAJAQAEAGQgDANABARQAAAEABADQACAPACAIQAEAPgKASQgBADgCAEQgEAFgDAFQgIAGADAGQACAEAAAGQAAADAAAEQABAEABADQgBAIgCAMQAAACgBAAQgFAQgHAPQgEAKgEALQgJANAEAIQAAABABAAQAAADABADQAYARAKANQAAAEABAGQAAADABADQAAAAAAABQgBAOgEAQQgCAGgDAFQgCAFgCAEQgEAFgEAEQgIAGgEAIQgHAKgFAIQgHAKgBALQAAAdgJARQgCAFgCADQgBABAAAAQgCACgCACQgBABgBABQgBABgBAAIgBABABzB/QAAAMgDANQgCALgGAJQgBACgCADQgFAIgFAGQgEAFgDAEQgIANgHAJQgFAHgCAGQgBACAAACQAAADAAADQgCAWgHAPQgDAFgCAEQgBADgCACQgBACgCACQAAAAgBABQgBAAgBABIAAAAQgBAAgCABQgUAOgRgOQgDgDgDgDQgHgHgGgIQgCgDgBgCQgBgCgBgBQgCgMgBgLQgBgOgBgOIAAgCQAAgEAAgEQgBgEgBgDQgDgNgQgJQgDgDgEgCQgWgJgDgLQgDgFgCgGQgDgNACgSQACgRAEgNQAAgBABgBQABgFABgDQAOgOANgOIABAAQAFgFgBgEQAAgCAAgBQgGgHgGgIQgJgJgJgLQAAAAAAAAQgLgKgEgNQgCgEAAgFQgEgQADgNQADgNAIgKQACgCACgDIAFgFIABAAQABgCgCAAQAAgBAAgBQAAgIgFgHQgMgGgMgOQgBgBgBgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQgPgPAAgdQAAgEAAgFIAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAHgZQAFgIAJgBIAAAAQAWgBAJgHQAOgBAKgPQAGgIAGgRQACgFACgEQADgHAFgGQAHgIALgDQAWgKAPAQAhojgQAVgBAKgFQAOgDAKgPQAGgHAHgTQABgEACgEAh2jXQAGgIAIgBAhegVQgCgFgBgFQgDgPADgMQADgPAJgKQABgCACgCAhNhcQABgBgCgBQAAgBAAgBQABgIgFgHAgxAoQAAgBAAgBQgFgHgHgIQgJgKgJgLAhTBVQABgHACgDQANgNANgNQAFgFAAgEAgfDdQAAgCAAgCQgBgHgDgGQgDgJgMgIQgFgEgGgEQgTgIgDgJQgFgGgCgKQgCgLACgPQACgUAFgPAAmEuQgYASgSgSQgEgDgDgEQgEgEgEgGQgCgCgCgDQgCgCAAgDQAAgBgBAAQAAgBAAgCQgCgIgBgJQgBgQgBgP");
	this.shape_23.setTransform(-0.9,32.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F6C070").ss(2,1,1).p("AAjlEQAEAHADAHIAQAjQABADABACIAAABQAAAAABAAQAKASARAMQADACADAEQAEAEADAGQAEAHAEALQAHAUgCAKQgLARABAPAAjlEQABAAAAABQADAHADAGAAalOIAHAGQABACABACAA9kNQALATAQAKQADADADAEQADADADAEQAGAJAEAMQAGASAAAJQgBAFgCADQgKAMABAPQAAABAAAAQAAAEABAEQAAABABABQACAKAFAIQAIAPgFAWQgCAGgDAGQgDAGgEAGQABAKgDAMQAAABAAABQAAACAAACQgDAJgDALQgBAEgBACQgEARgEAQQgEAQgBARQgEAJACAIQADAEAEAEQAOAQAIAOQACAIAAAMAA6kTQABADABADABpiGQACANAFAIQAIAPgGAVQgBAEgCAEQgCAGgDAGQgGAHAAAIQABAFgBAGQgBADgBAEQAAAEAAAEQgCAIgCAJQgGASgFARQgDALgBAMQgFANAEALQAAAAABABQAAADACAEQAVAWAHARQABAEAAAIIAAABQAAABAAABQAAANgDAMQgDAMgGAIQgCACgCADQgFAJgEAIQgDAGgCAGQgFAQgFALQgDAIgCAHQAAABAAABQgBADAAAEQgDAWgJAPQgDAFgDAEQgCADgBACQgCACgCACQAAAAgBABQgBAAAAAAQgCABgCABQgUANgRgRQgDgDgEgEQgGgHgFgJQgCgDgBgCQAAgBgBgBABuCRQAAAQgGAQQgCAGgEAFQgCADgCAEQgEAFgDAFQgHAIgCALQgEAMgEAJQgEAMgBALQgCAcgLASQgDAFgCAEQgBAAAAAAQgCACgCACQgBACgCABQgBAAAAABQgBAAAAAAQgYASgTgUQgDgEgDgEQgFgFgDgGQgCgCgCgDQgBgDgBgDIAAAAQgDgMgBgLQgBgGgBgHIAAgPQgBgGAAgHQAAgDgBgEQgCgOgOgMQgDgDgEgDQgTgLgDgOQgDgGgBgGQgBgIAAgKIAAgDQABgEAAgDQAAgCABgCQACgQAFgOQACgIACgEQAMgSAJgQQADgGAAgFQgBgBAAgBQgEgIgFgJQgJgLgJgKQgCgDgBgCAgVlHQAIgIANgCQAPgEALAHAgVlHQAIgHANgCQAPgFALAHAhWj1QAOgEAIgHQALgEAJgTQAFgJAGgRQABgEABgDAhWj1QAOgDAHgGQAMgGAJgSQAFgJAGgTQABgDABgDQAEgIAFgGQABAAAAgBAhNh8QgIgIgOgQQgBgBgBgBQgSgSADglQADgjARgDIAKgCAhOhnQAAgBABgBQAEgKgEgJAhOhnQABgBAAgBQAEgKgEgJAhPhkQABAAAAAAQABgCgBgBAhVgPQgFgKgDgKQgEgPACgNQACgPAHgLQABgDACgCQACgDACgCIAAgBQACgBgBgCAhVgPQgFgKgCgJQgEgQABgNQACgPAGgKQACgDACgDAg5AVQgBgBAAAAQgIgKgIgKQgCgCgCgDIgHgKAgvAoQAAgCgBgCQgEgHgFgIAhLBhQAAgBABgBQABgEABgDQANgTAJgSQAEgFgBgGAggD4QgBgEAAgDQAAgHgCgHQgCgLgKgKQgFgFgGgFQgQgKgEgLQgEgIgCgJQgBgIABgJAgaErQgBgCAAgCQgDgJAAgIQgBgHgBgI");
	this.shape_24.setTransform(-1,35.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F6C070").ss(2,1,1).p("AAtlOIACAGQAJAYAEAKQABADABACQAKARAUAMQABAAAAABQAGAEAEAKQAFAJACAQQADAWgFANQgCAFgEAEQgPAPABAOQABAKAEAIQACAGAEAFQALAPgCAYQAAAEgBAFQgBAHgDAHQgEAJgCAJQgCAFgCAHQgCADgBAEQgBAFgBADQgDAJgDAIQAAACgBACQgEAPgCAPQgCARACATQAAAJACAJQACAEACAEQARAbAFAVQABAGAAAGAAnleQAAABABABQACAHADAHAAnleQABACABACQACAGACAGAA8kmQABACABACQAMATARAKQABABABABQAHAFAEAMQAEAJACANQADAZgHANQgTAUAAAOQABAGACAGQABAEACADQACAFAEAFQAMAPgCAZQAAAHgCAHQgCAHgEAIQgBAKgFANQgBABAAABQAAACgBACQgEAJgDALQgDAEgCAHQgFAQgCAPQgBAMAAAOQgBANAFAMQAAABAAABQADAEADAFQANAVAGARQACAJAAAMQAAABAAABIgBAMQgCALgEAJQgDAGgEAFQgDADgCAEQgDAFgDAFQgGAKAAANQgCAPgCALQgCAOgBAKQgBANgEAMQgEAMgHAKQgDAEgDAEQgBAAAAABQgCACgCACQgCABgBABQgBAAgBABQAAAAgBABQgXAQgTgWQgDgDgEgFQgEgGgDgFQgCgDgBgDQgCgDgBgDQgBgDAAgCQgDgJgBgJQgBgHAAgIIgBgUQAAgBAAgBQAAgDAAgDQAAgEAAgDQgCgPgMgPQgDgEgEgEQgQgOgDgRQgCgFgBgHQAAgGAAgGIABgLQAAgFABgFQADgQAGgOQABgCAAgBQACgDABgDQAJgSAEgRIADgKQABgIgBgHQgDgJgFgKQgEgGgEgHIgIgKQgNgRgFgRQAAgBAAAAQgFgQAAgNQABgPAFgLQACgHAFgGQABgCABgCQABgCAAgBQAGgJAAgJIAAgFQgFgJgPgUQgBgBgBAAQAAgBAAAAQgBAAAAAAQgOgRAAgdQAAgFAAgEIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAHgYQAFgJAJgCQAUgFAKgKQAFgEAFgJIAFgLQABgDABgDQADgGACgIIAFgQQACgGACgEIACgDQADgEADgDQAEgDAEgCIAOgDQAagDALATABVDWQgFAJgDAKQgCAHgBAHQgCAUgDANQgBAJgBAHQgBAFgBAFQgBAIgDAIQgEALgHAKQgEAFgDAEQgCACgCACQgCABgBACQgBAAAAABQgBAAgBABQgCABgCABQgVAMgQgUQgDgDgEgFQgGgIgEgJQgCgCgBgEQgBgDgBgCQgDgKgBgJQAAgGgBgIABnCwQgBAHgCAGQgDALgIAJQgCACgCADAgalfQADgEAEgDQADgDAEgCAhnj8QAFgJAIgCQAXgGAJgLQAFgDAEgIAgskuQABgDACgEQACgGACgHAhZheQAAgBAAAAQADgIAEgFQACgCAAgBQABgCABgBQAFgJAAgJAgwAmQAAgBAAgBQgEgJgFgJQgDgGgEgGAgwA1IAAAAQACgHgCgIAhDBoQACgFACgFQAIgQAEgPAhOCTQAAgDAAgCQADgTAHgRQABgBAAgBAgkEIQAAgHgBgHQgBgMgJgMQgFgHgGgGQgNgMgEgNQgEgJAAgKQAAgFAAgG");
	this.shape_25.setTransform(-0.9,37.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F6C070").ss(2,1,1).p("AhqjxQADgjARgFQAZgIALgUQADgFAOg3QAHgbAeAAQAfAAAIAcQAOA1ADAGQAJAPAYANQAOAIAAAmQABAmgUAQQgTAQAAANQAAAPAOAOQAPAPACAcQADAagTAhQgVAjgBAgQAAAfARAmQARAmgBAeQAAAagRATQgPARACAaQADAmgDASQgDAagRAUQgEAFgEAEQgdAegXgeQgDgEgEgFQgOgWgEgaQgCgMAAgoQAAgUgRgWQgSgWAAgcQgBgfAPghQAOghAAgdQAAgdgXghQgYglgBgcQgCgfAOgQQAOgQgBgOQgBgMgTgXQgRgVADgkg");
	this.shape_26.setTransform(-0.5,40.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F6C070").ss(2,1,1).p("AAvlDIACAFQAHASADAIQACAEABACQAKARATAMQADACACACQAEAEADAGQAFAKACAPQAEAWgEAMQgCAFgEAEQgNANAAAOQAAABAAAAQAAAGACAFQABADABADQACAGAFAFQALAPgCAZQgBAGgCAIQgCAHgEAHQgBAKgFANQAAABAAABQgBACAAACQgEAJgDAKQgDAEgBAGIgBACQgFAQgCAOQgCANABANQgCANAEAMQAAABABAAQADAFADAFQANAUAHAQQACAKAAANQgBANgDAMQgEALgHAJQgCADgCADQgEAFgCAFQgGAJgBANQgCAOgCALQgDAOgBAKQAAABAAACAAelkQAGAFADAHQAFAMADAJAAelkQAGAFAEAIQAEALADAJAA7kkQACADABACQAMATARAKQADACACADQAEAFAEAIQAEAJACANQAEAYgGANQgSATABAOABbiTQABAKADAHQACAHAEAFQALAPgCAYQgBAEgBAEQgBAHgDAHQgEAJgCAJQgCAFgCAGQgBAEgBAEQgBAEgBAEQgDAIgDAJQAAABAAABABTAJQgEAPgCAOQgCARACATQgBAJACAIQABAEACAEQASAbAFAUQABAGAAAHQAAARgHARQgDAGgEAFQgCADgCAEQgFAJgDAJQgDAGgBAIQgCATgDANQgCAIgBAHQgBADAAACQAAADgBACQgDAWgMAQQgCAFgDAEQgBAAAAAAQgCACgCACQgCACgCACQgZASgTgXQgDgDgEgFQgEgFgDgGQgCgDgCgDQgBgDgBgDQgCgFgBgFIgBgJQgBgCAAgCQgBgGAAgJIgBgTQAAgBAAgBQAAgHgBgHQgCgMgJgMQgEgGgGgGQgOgMgEgNQgEgIgBgKQAAgNACgOQACgQAGgPQAAgCABgCQADgIACgFQAIgPAFgPABBEsQgEAVgLAQQgDAFgDAEQgCADgCACQgCACgDACQgCABgDABQgVAMgQgTQgDgDgEgEQgGgIgEgJQgCgDgBgDQgCgDAAgDQgBgCgBgDAgUlhQABAAABgCAgUlhQABAAAAgBQABAAAAgBQAIgFAKgCQABABAAgBIABAAQASgCAKAIAgok1QAEgJAEgPQAEgLAHgHQAAgBABgBAhakEQAVgFAKgJQAJgIAIgVQABgDABgDAhakEQAWgGAKgLQAIgFAJgXQAAgCABgCAhXiaIgHgJQgBgBgBgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQgNgQAAgbQAAgFABgGIAAAAQACgjASgEAhPhuQAAgCABgBQAHgLgDgLQgEgHgJgMAhPhuQABgCABgBQAGgMgCgKQgEgHgKgMAhVhkQACgEACgDQAAAAABgBAhVhkQABgDADgDQAAgBABgBQAAgBABgBAhZheQAAAAABgBQABgDACgCAg4ATQAAgBgBgBQgGgLgJgKQgFgHgEgHQgGgKgDgKQgFgQABgOQAAgPAFgLAg4ATQgHgMgJgLQgGgHgDgHQgHgKgDgLQgEgPAAgNQABgPAFgMAg2AYIgCgFAgvApQAAgDgBgDQgDgFgDgGAgwA0QABgGAAgFQAAgBgBgCQgCgHgEgHAgwA0IAAAAQACgFgBgGAhGBtQABgCABgDQABgFACgDQAJgSAFgQIADgKAgjEEQAAgDAAgDQAAgEgBgEQgBgPgNgOQgDgEgEgDQgQgOgDgQQgCgGgBgGQgCgPAEgSQACgNAFgNAggEsQgBgCAAgDQgBgGAAgI");
	this.shape_27.setTransform(-0.9,37.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F6C070").ss(2,1,1).p("AA8kGQALASAOALQADACADADQAEAFAEAGQAFAHAFAKQAHATAAAIQgJAQABAQQAAAAAAABQABADABAEIAAABIAAAAQAAABAAABQACAJAEAIQAIAQgHAVQgCAFgDAGQgDAGgEAGQABAJgCAMQAAABAAABQAAACAAACQgCAIgDAMQgBAGgCAEQgEAOgEAOQgEAQgCAQQgEAKABAHQADADADAEQAQAPAIANQADAIAAAMAA8kGIAAAAQAJASARAMQADACACACQAEAEADAFQAGAIAGALQAGARABAIQAAAEgBADQgIALAAAQAglkgQACgDABgEQADgMAJgJQAHgIAMgCQAYgIANATQATAkAGAQQABAAAAABAglkgQACgDABgEQADgMAIgIQAIgJAMgDQAXgHANARQAVAmAGARABuiEQACANAEAIQAGAPgHAUQgBADgCAEQgDAGgDAFQgGAHABAHQABAFgBAGQgBADAAAEQAAAFAAADQgBAIgCAKQgBABAAADQgFAQgGAOQgDALgCAMQgGANADAKQABAAABABQAAADABADQAWAVAIAPQABAFABAIQAAAAAAAAIAAADQAAANgDAMQgDAMgGAIQgCADgCADQgFAIgEAHQgEAFgCAGQgFAPgGALQgEAHgCAGQAAABAAACQgBADAAAEQgDAWgJAPQgCAFgDAEQgCADgBACQgBACgBABQgBABgBABQgBAAgCABQgBABgBAAQgVANgQgQQgEgDgDgDQgHgIgFgIQgCgDgBgCQAAgCgBgBQgBgCAAgBQgCgJgBgIQAAgEgBgEIgBgQQAAgJAAgJQgBgEAAgDQgDgOgPgLQgDgDgEgDQgUgKgDgNQgDgFgBgHQgDgNADgSQACgRAFgOQABgEABgDQABgDABgCQAMgPAKgQQAFgGgBgFQAAgBgBgCQgEgHgGgIQgIgKgJgLQgBAAgCgCIgGgJIgFgLQgDgFgBgGQgEgQACgMQACgPAIgLQAEgGAEgEQAAAAAAAAQACgCgCgBQABgBAAgBQACgHgCgGIgBgEQAAAAgBgBQgJgHgNgQQgBgBgBAAQgTgSADglQADgjARgDQAVgCAKgHQAKgEAHgKIAFgIQAAAAAAgBQAEgGAFgNABwCLQgBAPgFAQQgCAGgEAFQgCAFgCAEQgEAFgDAEQgHAHgEAKQgEALgEAJQgFALgBALQAAAAAAABQgCAcgKASQgDAEgCAEQgBAAAAABQgCACgCACQAAAAgBABQgCABgBABQgBAAgBABQgXARgTgTQgDgDgDgEQgEgFgEgGQgCgDgBgCQgCgDgBgDQAAAAAAgBQgDgLgBgLQAAgDgBgDAhjjtQAWgDAKgIQAJgCAHgKAgukMQAEgHAFgNAhOhkQAAgBAAgBQADgHgCgGAgwAnQAAAAAAgBQgFgIgGgIQgIgLgJgLQgBAAgCgCAhagWQgCgFgCgFQgEgRADgNQABgOAIgKQADgGAFgFAhMBWQABgBAAgBQANgRALgRIAAAAQAFgFgCgGAggD2QAAgHAAgGQgBgHgCgGQgDgLgKgJQgGgFgGgFQgQgJgEgKQgEgHgCgKQgBgMABgPQADgTAFgQQABgEABgC");
	this.shape_28.setTransform(-0.9,34.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F6C070").ss(2,1,1).p("AgikMQADgFADgFQAHgJALgEQAUgLAPANQAMAOAHANIALAWQAAABABABQAJAUAOALQADACACACQAEAEAEAEQAIAFAIAIQAJAMAHAEQACACAAADQgCAJAAAPQABACAAACQAAACAAACQABACAAADQACAJACAIQADAQgLARQgDAFgFAFQgEAEgEAFQAEAIAAALQAAABABACQAAACABABQgBAHgCANQgBAGgCAFQgDAMgFAMQgGAPgHAPQgIAJAAAGQAEADAEACQASALALAJQACAHABAQQAAAMgCANQgCAMgGAIQgBACgCACQgEAJgGAGQgFADgDAEQgJALgJAJQgFAFgDAHQAAABgBACQAAADAAAEQgCAWgGAPQgCAFgCAEQgBADgBACQgCACgCACQgBAAgBABQgBABgBABQgBAAAAAAQgVAOgQgNQgDgCgEgDQgHgHgFgIQgCgCgCgDQgBgBgBgCQAAgBAAgBQgCgJgBgIQAAgIgBgHIgBgQQAAgDAAgDQgBgHgDgFQgEgKgMgGQgGgEgGgDQgUgGgDgJQgFgFgDgKQgCgLACgPQACgVAEgOQAAgCABgCQABgEABgCQANgKAPgMQAIgFgBgEQgGgHgHgHQgKgKgJgLQgJgIgEgKQgDgHgBgGQgDgQAEgNQADgMAHgIIACgCQAAgBABAAQABgBAAgBIAFgEQABgCACgBQABgBgDAAQAAgBgBgBQgBgFgDgFIgCgDQgNgGgMgMQgBgBgBgBQgBAAAAAAQAAgBAAAAQgRgOAAgfQAAgDABgEIAAgBQADgjARgBIABAAQAVAAAKgFQAPAAAKgOQAGgGAHgSQACgEACgEIABgDQADgFAEgFQAGgJALgEQAUgLAQAOQALAOAHAMAA3jwQAKAVANAKQADADADADQAEAFAEAEQAHAGAHAGQAKAOAHAEQAAALABAQQABABAAABQAAABAAABAB9iBQACAPACAJQACAPgMARQgCADgCADQgEAEgEAFQgIAFAEAFQACAEABAGQABADAAAEQABAEABADQAAAHgCANQAAADgBACQgFAOgIAOQgEAKgFAKQgLANADAHQAAABABAAQAAACABADQAZAPALALQACADAAAKQABAPgEASQgCAHgDAFQgCAEgCAEQgEAGgFAEQgIAFgFAHQgIAIgGAHQgIAJgBALQAAABAAAAQAAAdgIARQgBAFgCADQgBABAAAAQgBACgDACQgBABgBABQAAAAAAAAQgCABgCACQgXAQgSgQQgDgCgEgEQgEgEgEgGQgCgCgCgCQgCgDAAgDQAAAAgBgBQgCgLgBgLQAAgHgBgFAhsjWQAUABAKgFQAQgBAKgNQAGgGAIgTQABgFACgDAhPhVQABgBACgBIAAgBIAAAAQABgBgCAAQgBgBAAgBQgBgFgEgFAhWhOQABgCABgBAgyAnQAAgBgBgBQgGgGgGgHQgKgJgIgKQgKgJgEgKQgDgHgBgHQgDgPADgMQADgMAIgJAhXBMQABgCAAgBQAOgMAQgNIABAAQAHgEgCgFAgfDUQAAgFAAgFQAAgDgCgDQgEgNgQgIQgEgCgEgCQgXgIgCgKQgEgEgCgGQgEgMACgTQACgRAEgNQAAgEABgC");
	this.shape_29.setTransform(-0.8,31.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F6C070").ss(2,1,1).p("AAWkAIAPAQIAIAMQADAFACAHQAJAWALAKQACADACACQAFAFAFAEQAIADAJAEQAOAIANgBQAJAJACATQABADAAAEQABAPgBAIQgCAPgRANQgDADgDACQgFADgEADQgKAEAHADQAEADADAGQABADABADQACAFADADQAAAGgBAOQAAAEgBADQgCAKgHALQgIANgLAOQgLAIgCAFQAAACAAACQAcAJAPAGQABADABAKQABADAAAEQAAALgBANQgCAMgEAIQgBADgCACQgEAIgHADQgFACgFADQgNAGgMAHQgHAEgCAGQgBACgBACQAAADAAADQAAAXgEAPQgBAFgCADQAAADgBADQgBACgDACQgCACgDABQgUAPgQgKQgDgBgEgDQgHgFgHgIQgCgDgBgCQgBgBgBgBIAAgBQgCgMgBgLQgBgTgBgLQAAgBAAgBQgCgHgEgFQgGgIgNgEQgGgCgGgCQgXgEgDgGQgGgEgDgJQgDgJABgNQAAgCAAgCQABgHAAgFIACgMQABgFABgEQABgIABgCQAOgFAUgIQAKgEAAgDQAAAAAAAAQgHgGgHgGQgLgIgKgKQAAAAgBgBQgDgDgCgEIgIgKQgCgHgBgHQgBgQAFgMQAFgMAKgIQAGgFAFgCQAAgBAAAAIAAAAQABgBgEAAQgBAAgBgBQgFgEgHgEQgRgEgLgJQgBgBgBgBIgSgrQAAgEAAgFQAAAAAAgBQADgjASAAIAAAAQABAAABAAQATAEAKgCQATACAKgJQAIgEAIgTQAAgBAAAAQAEgIAEgJQABgBABgCQABgBAAgBQAGgJAIgFQATgNAQAIQADADADACgAghjyQAGgIAHgFQAUgOAQAJQAEACACACABKizQAFAFAFADQAJADALAFQAMAGANAAQAEABACADQADAIACATQAAADAAACQAAABAAACQACAJAAAJQgBAPgQAOQgEAEgGAEQgFADgFADQAHAHACAKQABACABABQABACACACQAAAGgBAOQgBAGgCAFQgEANgLANQgGAJgIAJQgQAMADAFQABAAAAAAQAFACAFACQAUAHAMAFQACAEABAMQABAOgDAUQgBAGgCAFQgBAGgDAFQgEAFgGADQgKADgHAFQgKAFgJAFQgKAGgBALQAAABAAABQABAegFAQQgBAFgBADQAAABgBAAQgBACgCACQgCABgDACQgYATgSgOQgEgCgDgDQgFgEgEgFQgCgDgCgBQgBgDgBgCQgBgCAAgBQgBgIgBgIQgBgWgBgNQAAgDAAgCQgBgDgCgDQgFgMgSgFQgEgBgEgCQgagEgDgHQgEgDgDgFQgEgKAAgPQAAgDAAgDQABgFAAgFAAtjkQADAHACAHQAIAVANALQABABACACAgkjtQABgCABgBQABgBAAgBAh2i/QAUADAJgCQASADALgJQAIgEAHgSQABgBAAgBAhMhOQAAAAgEgBQAAAAgBgBQgFgEgIgEQgRgEgKgJAhngIQgCgHgBgHQgCgPAFgMQAFgNAMgJQAFgEAFgDAg2AoQAAgBAAAAQgIgGgHgGQgLgIgJgJAhkBGQAAgBAAAAQABgGAAgCQAQgFAVgJIAAAAQAKgDgCgEAhmBPQABgEAAgDQAAgBABgB");
	this.shape_30.setTransform(-0.5,27.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F6C070").ss(2,1,1).p("ABCiYQAFAFAEABQAKACAMAAQAQACATgEQATAFACAUQABADAAACQAAACAAACQABAKgCAJQgEAQgVAKQgFADgHACQgHACgFACQAKAFAEAKQABACACACQABACACABQACAFAAAPQgBAFgBAFQgEANgOANQgIAIgKAHQgUAMABACQABABABAAQgBABAAAAQAfAEASACQAAAAABACQABADABAIQAAAFABAHQAAAJgBALQAAANgEAHQgBADgCADQgEAFgGABQgLABgKACQgNACgKADQgMAEgBAKQgBACAAACQACAegCAQQgBAEgBADQAAABAAAAQgBACgBACQgBAAAAAAQgCACgDABQgEAEgEACQgTAMgPgJQgEgCgDgDQgEgDgFgFQgCgCgCgCQgDgCAAgCIAAgBQgBgMgBgKQAAgIgBgGIgBgOQAAgCAAgCQgCgHgFgEQgHgHgPgBQgHgBgGgBQgagBgCgDQgHgDgEgJQgEgKABgQABCiYQAFAEAEABQALACAOABQAPABASgEQAGAAAEACQAJAGACAVQAAABAAABQAAARgDAJQgGAPgXAJQgDACgDABQgHACgFACQgMADALABQAGACAEAFQACADACAEQACAEAEADQADAFgBAPQAAAEgBAEQgDAJgIAKQgJANgQALQgPAJgCAEQAFABAFAAQAXACAOACQABABABADQACAGAAANQAAACABACQgBAKAAALQgBAHgBAFQgCAIgDAFQgEAGgHACQgHAAgGABQgQACgOAFQgJACgDAGQgBACAAACQgBADAAAEQABAXgBAOQgBAFgBAEQAAADAAACQgBACgBACQgBABgBAAQgCABgDACQgDADgEACQgQAKgNgGQgDgBgEgCQgIgFgHgHQgCgCgBgCQgCgBgBgCQAAgBAAgBQgBgJgBgHQAAgKgBgJAASjjQAPAKAIATQACADABADQAAACABABQAHAWAIAJQADAEADACAgpjJQAFgLAHgGQAQgTATAFQAGACAGADAgpjJQAFgLAHgIQARgRASAFQAGACAGADAAti9QAHAXAKAKQACADACABAgui+IAFgLAh9ilIAGACQALADAHAAQAVAFAMgEQAGgBAGgJIABgDQACgDACgEQACgFADgGAg3isQACgDADgGQACgEACgFAhShDQgBAAgBgBQgKgCgIgCQgVgCgJgGQgBAAgBgBQgVgMACgnIAAgBQADgkASACIAAAAQAEABADABAiEinQADABAEABAhqAFIgDgEQgEgHAAgJIAAgBQgBgPAHgMQAGgLANgHQAEgCADgCQACgBACgBQABAAgBAAIgBAAQgBAAgCAAQAAAAgBAAAhxgQQgBgPAGgLQAHgMANgIQAEgCADgBQADgBACgBQAAAAgBAAAhOhDQgBAAgDAAAhLAgIgGgEQgJgGgHgHQgGgFgDgFAhRAcQgIgFgHgGQgHgGgDgGAg6ApIgBAAQgIgFgIgEAhwA1QAAgCABgBQAPAAAZgEQAOgCgBgDAhwA1QAAgCAAAAQARAAAagFIABAAQAMgCgCgDIAAAAQgJgEgIgFAhxA2IABgBAhyBGQAAgFABgEQAAgEAAgDAhyBGQAAgHABgFQAAgCAAgCAggCeQAAgDAAgDQgBgDgCgDQgHgKgUgCQgEAAgEgBQgegBgCgEQgFgCgDgGQgHgJABgUQAAAAAAgBQABgLABgJ");
	this.shape_31.setTransform(-0.1,24.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F6C070").ss(2,1,1).p("ACJiLQABAAABAAIAAAAQARgCAGANQABACABADQABAHAAAJQgBAGgCAFQgCAGgEAFQAAACgBABQgJAMgSAGQgFACgGABQgHABgFACQAHACAFAEQADADACAEQADAFAFADQABACABAFIAAANQAAAKgFAHQgDAEgDAEQgLAMgVALQgHAEgFADQgLAGABAAIAAAAIAAABQAbAAAVAAQACgBADAAQABABABACQABAEACAKABFiDQABAAACAAQASABAWgDQAMgCANgEABFiDQAWABAZgEQAKgCALgDQABAAABAAACiiAQADAIgBANQAAADgBADQgCAJgFAHQgCAFgEADQgLAKgTAEQgCABgBABQgHABgFABQgNACANgBQABABABABQAKAEAFAIQADAFAFADQABACABAEAgXjOQALgHAMABQADAAADABQAZAHAKAhQAAACABACQAFANAFAIQAHANAJACQAAAAABAAAgXjOQALgHAMABQAFAAAEACQAXAIAKAhQAAABAAABQAFALAEAHQAHANAIAEQABAAACABACEgRQAAAFgBAEQgDAIgHAIQgLANgVALQgCABgBABQgRAIgCACQAfAAAWgBQAAAAAAABQADACACAPIABAZQABACAAACQAAABAAAAIAAAHQgBAKgDAGQgBABgBABQgEAFgGABQgPgBgNABQgNAAgLACQgJABgEAFQgDADAAAFQAAACAAADQABAPABALQACATgBAHQgBADgCACQgBAAAAABQgBABgEACQAAABgBABQgCABgCABQgBABAAAAQgDACgDACQgBAAAAAAIghAAQgGgDgGgFQAAgBgBAAQgBgBAAgBQgBAAgBgBIAAAAQAAAAgBgBQgCgCAAgCQgBgUgBgOQAAgCAAgBIgCgRIgCgFQgGgHgMgCQgEgBgFgBIgDAAQgMAAgIAAQgVAAgCgBQgIgCgEgIQgBgCgBgEQgCgFAAgGIAAgeQAAgKABgFQABgFAAAAQASADAdgCQADAAACgBQAIgBgBgBIAAAAQgJgEgIgEQgPgHgJgJQgFgFgEgFIgHgSQAAgBAAgCQABgLADgJIAEgIQAIgKAOgHQACgBACgBQABAAACAAQADgBACgBQACgBgLABIgFAAQgEgBgDAAQgcAAgNgEQgBgBgBAAQgKgFgFgJQgIgMAAgUIAAgBQAAgCABgCQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQADgeAQAAQABAAACABQAFACAEABIAQAGQADABADABQAcAHAJgBQAAAAABAAQAIgBAJgRIACgEQABgDABgDQADgGACgHQAGgQAJgJQAAgBABgBIAHgFAB/BiQgBAFgBAEQgBAGgDADQgEAGgHABQgKgBgKAAQgRAAgOACQgFABgDACQgHADgBAIQAAACAAACQACAUABAOQABANgBAGQAAADgDACQgCABgDACQgBAAAAABQgDACgCACQgCABgCACQgCABgBABAg1ibQABgCABgDQACgGADgIAiQiXQABAAABABQAFACAFABAh0iNQADABADABQAcAHAJgBAg+AuQAAAAAAgBQgJgEgIgEQgOgGgJgIQgGgFgEgGAhVg4QACAAABgBQADgBACAAAhbg6QgDgBgDAAQgBAAAAAAAhvglQAIgLAOgGQACgBACgBAhKAxQACgBABAAQAJgBAAgBAhAB+QgNABgKgBQgSAAgCgBAgiCJQgFgHgJgCQgGgBgHgBAh7BEQAAgIABgFQABgHAAAAAh3BzQgCgDgBgFQgBgEAAgFAgaDIQAAAAAAgBQgCgBAAgCQgBgXgBgOAgJDVQgGgDgFgFQAAAAgBgBQgBgBgBgBQgBAAAAAAQAAAAgBgB");
	this.shape_32.setTransform(0.1,22.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F6C070").ss(2,1,1).p("ABLiSQACABABAAQASABAUAAQAMgBANgCQAPgCAEAOQABAIgBAMQAAACgBADQgDAKgFAJQgDADgCACQgLALgPAFQgCABgBAAQgGACgEACQgMACAMABQABAAABABQAJAEAEAJQADAFAEADQACAFgBAPQAAAEgBAEQgDAHgEAFQgLAPgXANQgGAEgFAEQgKAFAAABQABAAAAAAQgBABABABQAaACAUABQADAAADAAQABABAAABQAFALABAhQABAGgBAFIgBAGIAAAAIAAACQgBADgBACQgFAHgHACQgOAAgOABQgMABgLACQgJACgDAFQgCACAAADQgCADAAAFQABAQABAMQABAOAAAJQAAABAAABQgBADgDACQgBACgDACQgEADgDADQgBABgCABQgCABgCACQgZAOgUgWQgBgBAAAAQgBgBAAAAQgBgBgBgBQgBgBAAgBQgBAAAAAAQgBgCgBgBIAAgBIgBgTQgBgKAAgJQgBgIAAgFQgBgDAAgBQgEgLgMgDQgGgDgJgBQgLAAgJgBQgUAAgDgDQgBAAgCgBQgHgEgEgLQgBgGgBgHIAAgCQAAgDAAgDQAAAAAAgBQABgZACgKQABgFAAAAIABAAQARABAbgEQACgBABAAQAJgCgBgCIAAAAQgJgEgIgFQgOgHgJgJQgGgGgEgHIgFgNQAAAAAAgBQAAgBAAgBQgBgCAAgBQAAgLAEgJQAGgRASgJQACgBACgBQACgBABAAQACgBADgBQAAAAAAAAQABAAAAAAIAAAAQABgBgKAAIgBAAQgEAAgEgBQgBAAgBAAABLiSQAXACAWgCQALAAAKgCQATgBACATQAAAGgBAIQgBAGgCAFQgDAIgEAGQgBAAAAABQgIAMgPAHQgEACgFABQgGACgFACQAHADAEAEQADAEACAEQADAEAEADQACAFgBAPQAAAKgGAKQgCACgBAAQgLAQgXAOQgCABgBABQgOAHgDADQAeACAVACQABAAAAABQAHAGABApQAAAGgBAEAggjUQADgDADgCQAOgNAQAEQAEAAAEACQAWAKALAgQAAABABACQAFAKAEAHQABABABABQAHAMAJACQABAAABAAAggjUQACgCADgCQAOgOARAEQADABADABQAXAJALAfQABADABACQAFAMAGAHQAGAKAJADQABABACAAAB+BwQgEANgLACQgKAAgKAAQgRABgOADQgEABgDACQgFADgBAFQgCADABAEQABAUABAOQABALgBAHQAAACAAABQgBADgDACQgBACgEACQgBABgBABQgDADgEACQgbASgVgXQgBAAgBgBIAAAAIAAgBQgBAAAAAAQgBgBAAgBQgBgBgBgBQgCgBgBgCAgmjKIAGgKAgyivQABgBABgCQACgGADgHQACgGADgFAgyivQABgBAAgBQADgHADgIQACgFADgFAiBihIAVAHQAAAAABAAQAAABAAAAQAcAFAJgBQAJgCAJgRIACgHAiVhUIgMguQADgkATACQABAAAAAAQAFACAEABAiLikQAFACAFABAiIhLQgCgBgBgBQgGgDgEgEAiIhLQgBgBgBAAQgHgDgEgFAhNhCQAAAAABAAQgBgBgIAAAhVg/QACgBACAAQACgCACAAAhWhDQgFAAgFgBQgagCgOgFAhIAvQADgBACAAQAIgCgCgCAh5BaQABgWACgLQABgHABAAAhsB/QgIgFgDgNQgBgEgBgGAgeCaQgBgCAAgBQgEgNgPgDQgFgCgHAAQgNgBgKgBQgRAAgCgCQgCgBgCgBAgcC6QgBgIAAgHQgBgLAAgGAhOAhQgNgHgJgIQgHgHgEgH");
	this.shape_33.setTransform(-0.1,23.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F6C070").ss(2,1,1).p("ABRieQABABACAAQASACATACQALABALgBQANAAACANQAAAIgCALQAAADgBADQgDAIgEAIQgBACgBABQgIAMgLAIQgEACgEACQgFACgFADQAHADAEAFQACADACAEQACAFAEADQACAFgCAQQgBAJgFAKQgCADgCABQgMAPgUANQgGAEgEAEQgKAGABABQAAABABAAQgBABAAAAQAZAEAVAEQACAAADAAIAAAAQAIAHABAoQAAAKgCAGQgDAOgLADQgKABgKABQgRACgNAEQgEABgDACQgHAEgBAKQAAAAAAABQAAABAAABQABAPABAMQABATgBAIQgBABAAAAQgBADgCACQgBABgEACQAAABgBABQgCACgCABQgCACgCABQgCABgCABQgLAHgKgBIgHgBQgIgDgJgJQAAAAgBAAQAAgBAAAAQgCgCgBgBQgBgBgBgBQgBgBAAgBQgBgBAAgBQgCgUgBgPQgBgKAAgFQAAgEgBgCQgDgMgMgDQgGgDgJgCQgLgBgIgCQgTAAgDgDQgBAAAAgBQgDgBgDgCQgFgFgCgJQgBgDgBgEQgBgGABgIQAAAAAAgBIABgTQABgKACgGQAAgEABgBIAAgBQAIAAAKgCIALgCQAGgBAHgCQACgBABAAQAHgBAAgDIAAAAQgIgFgIgFQgNgIgJgKQgHgGgDgHIgFgNQAAAAAAgBQgBgDAAgCQAAgLADgKIADgIQAHgMANgHQACgBADgBQABAAABgBQADgBACgBQACgCgJAAQgEgBgFgBQgZgCgQgIIAAAAQgCgBgBAAQgGgDgEgFIgNgnQAAgCABgFQACgkAUACQAAAAABAAQACABACAAQASAGAKACQAaAEAJgCQABAAAAAAQAHgCAGgKABRieQAXADAVABQAJABAJgBQARAAAAASQgBAHgBAIQgCAFgCAFQgDAHgDAFQgDAEgDADQgKALgMAGQgBABgBABQgFACgEACQgKADALABQABABAAABQAIAFAEAJQACAFAEADQACAFgCAOQAAAFgCAEQgDAIgEAFQgLAQgVAOQgCABgBABQgNAIgCAEQAbADAWAEQAAABABABQAAABABABQAGAMABAfQABALgCAHQgBAEgBACQgEAIgHABQgOACgNACQgNACgKACQgJADgDAFQgEAEAAAHAgSjqQANgIANAFQADAAADACQAWALALAeQABACABACQAGAMAHAHQAHALAKACQABABABgBAgSjqQANgIANAEQAEABAEACQAVANALAeQABABAAABQAGAKAGAHQAHALAKADQABABACAAAAxDYQgBACgBABQgCACgDACQgDADgDADAAwCfQACATABAQQAAANgBAHQAAABgBABAgljVIABgCQAEgIAGgGQABgBACgBQAAAAABgBQACgBACgBAgqjKQABgCABgCQABgEACgDAgqjKQABgCABgDQABgDACgDAgsjFIAAAAQABgCAAgCIABgBAgwi7QACgDABgDQAAgBABgDAgwi7QABgCABgDQABgCABgDAgXjnQACgCADgBAhEijQABAAABAAQAGgCAGgKIAGgMAiIiuQADABACAAQASAGAKACQAZAEAKgCAiFhVQgCgBAAAAQgGgDgFgFAhThEQABAAABgBQADgCACAAAhsgvQAHgLANgIQACgBADgBAhThJQgFgBgFgBQgZgCgPgIAg8AqQAAAAAAgBQgIgFgIgFQgNgHgIgJQgHgHgEgHAhGAvQADAAACgBQAGgCgBgCAhwA3IAAgBQAIAAAKgCAh0BMQABgJACgGQAAgFABgBAhsCDQgFgGgDgKQAAgCgBgDAhlCHQgEgCgDgCAgdCnQAAgDgBgCQgDgNgPgEQgFgCgGgBQgNgBgKgCQgRgCgCgCAgYDbQgBAAAAgBQgCgXgBgQQgBgIAAgEAgSDjQAAgBAAAAQgBgBgCgCQgCgCgBgCAAADvQgIgCgJgKQAAAAgBAA");
	this.shape_34.setTransform(-0.3,25.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F6C070").ss(2,1,1).p("ABUiqQADABADAAQASADARAEQAKADAJAAQAMABAAANQgBAIgDALQAAACgBADQgEAIgEAHQgDAEgDAEQgJALgJAHQAAABgBABQgEADgDACQgJADAKADQABABAAABQAIAFACAKQACAFADADQABAFgBAOQgBAFgCAEQgDAHgDAGQgMAOgUAOQgFAFgEAEQgJAGABACQAAAAABAAQgBACABABQAXAFAUAGQADAAADABIAAAAQAAABAAAAQAHANACAeQABAGgBAEABUiqIABAAQAYADAUAEQAIACAIAAQAOACgCASQgBAGgCAIQgCAGgCAEQgDAGgEAFQgBADgBACQgHAMgIAIQgDACgEADQgDADgEACQAFAEAEAFQACAEACAEQACAFADADQABAGgCAPQgBAJgGAKQgCACgBADQgLAQgVAPQgCACgBABQgLAHgCAEQAZAGAWAGQABABABACQAIAJACAmQAAAEgBADQAAADAAACQgBAGgCAEQgEAHgHACQgNADgOADQgMACgKAEQgIACgEAFQgDAFAAAIQABATABAQQAAANgBAHQgBABAAABQgBACgBACQgCACgDACQgDAEgDACQgEAEgEACQgZAQgUgXQgBAAAAAAQAAAAgBgBQgCgBgBgCQgBgBgBgBQgBgBAAgCIAAAAQgEgXAAgRQgBgGAAgFQgBgEAAgCQgEgOgNgEQgFgCgGgCQgMgCgKgDQgRgCgDgDQgKgFgDgOQgBAAAAgCQgCgIABgLQgBAAABgBQABgVAEgNQAAgFABgCQASgEAWgHQACgBACgBQAHgCgCgDIgBAAQgIgFgHgGQgMgIgIgKQgBAAAAAAQgPgOgBgTIAAgBQAAgLADgJIAIgQQAFgHAJgGQABgBACAAQABgBACgBQACgBACgBIABgBIAAAAIAAAAQABgBgHAAQgEgCgFgCQgGgBgFgBIgcgLIgBAAQgBAAgBgBQgGgDgEgEIgNgoQAAgDAAgEQADgkAUABQAWAGALACQADABAEAAIAOABQALAAAEgCQAEgBAEgFIAJgOQABgFADgFQAAgCABgCQACgFACgFQACgEABgDQAHgLAJgGQAQgLAPAHQADABACABQAVAPAMAcQABABABACQAGALAHAGQAIAKAKADQABABAAAAgAgjjkQAHgMAKgGQAPgKAPAGQAEACADACQAUAPAMAcQAAABABABQAGAMAIAHQAHAKALACACBB2QgBACAAACQgEAOgKADQgKACgKACQgRADgMAEQgEACgDACQgHAFAAAKQgBABABABQAAAPABANQAAASgBAJIAAAAQAAADgDADQgCACgDACQgBABgBABQgDADgEADQgcAUgVgYQgBgBAAAAQAAgBgBAAQgBgCgBgBQgDgDgBgCQgBAAAAgBQgDgUAAgQQgBgIAAgGQgBgFAAgCQgDgMgLgFQgGgDgJgCQgKgCgJgCQgTgCgDgEQgJgFgEgNAgqjTQACgFACgGQACgDABgDAgvjFQABgEADgGQAAgCABgCAhPivQALAAAFgCQADgCAEgEAiDhfQgBAAgBgBQgGgDgEgEAhMhNQABgBgHgBQgEgBgEgCQgGgBgGgBAhUhIQABgBACgBQACgBACgBAhlg6QAFgIAIgFQACgBACAAAg8ApIAAgBQgHgFgIgGQgMgHgIgKAhsA7IABgBQARgEAWgHQACAAABgBQAHgCgCgDAhyBkQABgXAEgNQAAgEABgBIAAAA");
	this.shape_35.setTransform(-0.4,26.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F6C070").ss(2,1,1).p("ABfjBQADABACABQATADAOAKQAIAGAGADQAHADgEANQgDAHgEAKQgBACgBADQgFAHgDAHQgDAFgCADQgIAMgCAJQAAABAAABQgCADgCAEQgHAEAIAFQABABAAABQAGAGAAALQACAEACAEQAAAGgDANQgBAEgCAFQgDAGgDAGQgNAPgQAQQgFAFgDAFQgIAGABADQABABABAAQgBACABACQAUAIAVAKQACABADAAIAAAAQALANABAjIAAAHQgBAFgBAEQAAACgBACIAAAAQAAAAAAABQgEAHgGAEQgNAFgNAEQgMAEgKAEQgIAEgDAFQgDAEAAAFQgBADAAAEQAAAPABAOQABARgCAKQAAABAAAAQgBADgDADQgBACgDACQgBABgBABQgEAEgEADQgEADgEACIgDABIgVADQgIgCgJgKQgBgBgBgBQgCgBgBgCQAAAAAAgBIgBAAQgBgBAAgBQgBgBgBgCIAAAAIAAAAQAAgBAAgBIgDgSQgCgLAAgKQAAgEAAgDABfjBQAYAEARAKQAHAFAFADQAKAEgGARQgEAGgCAHQgDAFgDAEQgEAGgDAFQgBADgBACQgGANgCAKQgBADgCADQgCADgDAEQAFAFACAGQACAEABAFQABAEACAEQAAAGgCAOQgCAKgGAJQgCADgCADQgMASgSASQgBABgBABQgJAIgBAFQAVAJAXALQABABABACQAIAPADAdQAAACABACAgMkRQAPgIAPAKQADACACACQATATANAZQAAABABAAQAJAMAIAFQAIAJAMADQABAAABAAAgMkRQAPgJAPAKQAEACADADQARAUAOAZQAAABAAAAQAIAMAKAGQAIAJAMABQABAAAAAAAB/CLQgEALgIAEQgKADgKADQgQAEgMAHQgDACgDACQgFAEgBAHQAAACAAACQAAASABASQAAANgBAIQgBABAAABQgBACgCACQgBACgDADQgDADgDAEQgCACgDACQgBABgCABQgCACgDABACCB+QgBAHgCAGAgXkKIAEgEQADgBADgCQAAAAABAAAgljxQABgEACgEQAFgLAGgGAg3jOQAIgIAIgWQABgCABgDAg3jOQAIgIAIgVQABgDABgDQABgFACgEQAFgKAGgGAhIjIQAJgBAEgCQACgBACgCAhIjIQAJgBAFgDQABgBACgBAh7jMIAbAFQABAAAAAAQAAAAABAAQAAAAAAAAIAWgBAiTiEIgGgcQAAgEAAgFQADglAVABIABAAQACABADAAAiBjNQADABADAAAh+hwQgCgBgBgBQgLgHgHgLAh+hwQgBgBgBAAQgMgHgHgMAhogHIgFgSQAAgBAAgBQgBgLADgKQAEgUAPgLIACgBQACgCADgBQACgCACgBQAAAAAAAAQACgCgGgBQgDgDgDgDQgTgEgUgNAhWhQQACgCACgBQADgCACgBIABAAQACgCgHgBQgCgDgDgDQgTgEgVgNAg7ApQAAAAAAgBQgHgGgHgHQgLgJgIgKQgIgIgEgHAhlBFIABAAQARgJASgKQABgBABgCQAFgCgBgEQgHgGgHgHQgLgJgJgLQgHgIgEgHAhlBFQASgIASgLQACgBABgCQAFgDgCgDIAAAAAhtBrQACgTAFgNQAAgEABgCIAAAAAhtBrQACgSAFgNQABgFAAgCAhtB8IgBgDQAAgBAAgBIAAgBQAAgDABgEQAAgCAAgCAhuB2QAAgCABgDQAAgDAAgDAhnCQQgDgEgCgGQgBgEAAgGAhnCQQgDgFgCgHQgBgEAAgEAgcDNQAAgHgBgDQgDgNgJgFQgFgEgJgEQgKgDgJgEQgRgDgEgGQgFgEgDgFAgcDNQAAgFgBgDQgDgPgLgFQgFgEgGgDQgLgDgLgFQgPgDgDgFQgGgEgDgGAgZDrQgCgJAAgJQAAgGAAgEIgBgCAgTEEQAAgBgBgBQAAAAAAAAAAEEWQgIgDgJgKQgBAAgBgCQgCgBgBgB");
	this.shape_36.setTransform(-0.6,29.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F6C070").ss(2,1,1).p("AgbkSQAHgJAKgEQAQgIAPANQACABADADQARAWAOAXQABABABABQAJAKAJAFQAIAIANADQABAAABABQADABACAAQASAEANANQAIAHADAEQAGAFgGAMQgFAHgEAKQgBACgCACQgEAHgEAHQgCAEgDAEQgGAMAAAKQABABAAACQgBADgBAEQgGAFAHAGQABABAAABQAFAHAAAKQABAFABAEQAAAGgDANQgCAEgCAEQgDAIgEAGQgMAPgPAPQgEAGgDAFQgHAGABAEQABAAAAAAQAUALAXAOQABABABACQAAABAAAAQAKAQADAbQABAKgBAIAgbkSQAHgKAKgEQAQgHAPALQADADADADQARAXAOAXQAAABABAAQAIALALAGQAIAIANABQAAABABAAQAYAEAPANQAGAGAEADQAHAGgIARQgEAGgDAGQgDAFgDAEQgEAGgEAFQgBADgBADQgFAMABALQAAADgCAEQgBAEgCAEQAEAFADAGQABAFAAAFQABAEACAEQAAAHgEANQgCAKgGAJQgCAEgDAEQgMASgQASQgBABAAACQgIAHgCAFQAAADABACQATAKAVAMQACABACABQAAAAABAAQALAOACAiQAAAHgBAGIgBADIgBACQAAACAAAAQgEAIgGAEQgMAGgNAFQgMAEgKAFQgHAEgEAGQgCAEgBAGQAAABAAABQAAATABASQAAAOgCAIQAAACgBABQgBACgBABQgBACgDADQgDAEgDADQgEAEgEACQgTAPgPgJQgHgDgGgHQAAgBgBAAQgCgCgBgCQgBgBgBgCQgCgBAAgCQgBgBAAgBQgEgTgBgSQAAgBAAgBIgBgMQAAgFgBgDQgDgNgJgGQgFgFgIgEQgKgEgJgEQgQgFgFgGQgFgEgEgHQgCgFgBgFQgBgEgBgFIAAgBQAAgBAAgCIAAgCQAAgDABgEQAAgBAAgBQABgUAHgPQAAgEABgBQACgBABgBQAQgLAPgLQABgBAAgCQAFgDgBgEQgBAAAAgBQgGgGgHgIQgKgJgIgLQgBgBgCgBIgEgFQgIgOgCgOIAAAAQgBgMACgKIAMgZQADgDADgDQAAAAABgBQACgCADgCQADgCADgCQACgCgFgBQgCgDgDgEQgJgCgKgFIgVgNQgBAAAAAAQgBgBAAAAQgEgCgCgDIgSgyIAAgBQACglAWABQABAAABAAQAVADAMABIAAAAIAMgBQARgBAGgEQADgCACgCAB/CRQgEALgIAEQgJAEgKAEQgRAFgLAHQgDACgDADQgEAFgCAHQAAADAAADQgBAPABAPQABASgDAKIAAAAQgBAEgCADQgCACgDACQAAABgBABQgEAEgEADQgVARgQgKQgHgDgGgHQgBgBgBgCQgBgBgCgCQgCgDgBgCQgFgVgBgUAgkj+QABgFADgFQACgGADgEAgkj+QABgGADgFQACgFADgEAgqjwQACgEACgGQABgCABgCAgqjwQACgEACgGQABgCABgCAhQjUQARgCAHgEQACgBACgCIAGgKIAEgJAh+h6IAAgBQgEgCgDgDAhYhUQACgCAEgCQACgCACgBQAAAAABgBQABgBgFgCQgCgDgDgEQgJgCgJgFAhfhNQADgDAEgEAg7AoQgHgGgHgIQgKgJgJgMQgBgBgBgBAhfBIQAQgKAPgLQABgCABgCQAFgDgCgEAhrByQACgTAGgOQABgGABgCQABAAABgBAhsB7QAAgCABgDQAAgCAAgCAhnCUQgBgEgCgFQgBgEgBgGAgcDWQAAgDgBgDQgDgQgLgFQgEgEgGgEQgLgEgKgFQgPgEgEgGQgGgEgEgI");
	this.shape_37.setTransform(-0.7,30.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F6C070").ss(2,1,1).p("ABqjXQACAAACABQASAFALAPQAHAIACAGQADAGgHAMQgHAIgEAIQgCACgBACQgFAHgDAGQgCAEgBADQgEAMAEAMQABAEgBADQAAAFgCAFQAEAFACAHQABAEAAAFQABAFABAEQgBAHgEAOQgDAJgGAJQAAABgBABQgOATgPASQgFAHgCAFQgGAGABAFQABAAAAAAQAAADABADQASALAUAOQADACACAAQAAABAAAAQANAQABAgQABAJgCAHQgEAOgJAFQgJAGgKAEQgQAGgLAIQgEACgCADQgDAEgCAFQAAADgBACQAAAQAAATQAAABAAACQAAAPgCAKQAAAAAAABQgBADgDADQgBACgDADQgBABgBABQgDADgEADQgGAFgGADIgJADQgJABgIgEIgCgBQgFgEgGgFQgBgBgBgBQAAgBAAAAQgBgCgCgBQgBgCgBgCQgBgCgBgBQgCgKgBgJIgCgTQAAgBAAgBQgBgDAAgDQgBgHAAgFQgDgQgKgHQgEgDgGgEQgKgFgLgHQgOgEgEgHQgJgIgEgPQgBgCAAgCIAAgCQAAgBAAgBIgBgDQAAgFABgGQACgUAGgQQACgEABgCQAAgBAAgBQARgNAOgNQAAgCABgBQAEgEgBgFQgBAAAAAAQgFgHgHgHQAAAAAAgBQAAAAgBAAQgJgKgJgMQgGgHgEgJIgFgTIAAgBQgCgLACgKQADgVAOgMIABgCQADgBACgCQADgCACgCQACgDgEgCQgBgDgDgEQgIgDgKgGIgVgOQgBAAgCgBQgDgDgDgCIgSgyQADgmAWAAIAAAAQAYADALAAQABAAAAAAQAAAAABAAIARgDQALgCAFgDQADgDAEgFAgikQQACgEACgDQAHgRAPgEQASgIAOAPQACACACADQALAQAKAOQAFAJAGAHQAKALALAFQAIAHANADQACAAACABQAXAEAMAQQAGAHACAFQAGAIgKAQQgFAFgEAGQgEAFgCAEQgFAFgDAFQgDAFgCAEQgGAMAEALQABABAAACQAAAEgBAEQgDAGAFAHQABABAAABQAEAHgBALQAAAFABAEQgBAGgDANQgBAEgCAEQgCAEgCADQgOAWgQAWQgBACgBABQgHAHgBAGQASANAXAQQABABABADQABAAAAAAQAKARADAaQADAQgFAJQgDAIgGAEQgLAIgOAFQgMAFgJAGQgHAEgDAHQgCADgBAEQgBAFAAAFQAAAOAAAQAgikQQABgDACgDQAIgTAQgEQARgHANAOQAEACACAEQAKAQAKAOQAFAJAGAIQAJALAMAGQAJAGANACQABAAACABAA3ERQgBACgBABQgBACgDADQgDAEgDADQgEAEgDADQgFAEgFACAA5D4QABANgCAIQAAACgBACAgpj9QADgFACgGQABgEABgEAgpj9QACgFACgGQACgEABgEAhHjhQALgCAFgEQAEgDADgEIABgBQACgEADgGIABgEAh7iDQgBAAgBgBQgEgCgDgDAhYhZQADgBACgCQACgCADgCQACgCgFgCQgBgEgDgEQgHgDgKgGAheBQIAAAAQARgOAOgOQABgCABgBQAEgEgCgEIAAgBQgHgGgGgIAhJAZQgJgKgIgMQgHgHgEgJAhqCFQAAgEAAgFQACgWAHgRQACgDABgCAgcDoQgBgKAAgFQgDgNgIgGQgFgFgIgFQgJgFgKgFQgQgFgEgIQgIgHgEgMQgBgDAAgDAgPEgQgBgBgBgBQgBgBgBgCQgBgBAAgBQgBAAAAgBQgDgKgBgLAgCEsQgFgDgFgGQgBAAAAgBQgBgBgBgBAgbDwQgBgEAAgE");
	this.shape_38.setTransform(-0.7,31.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F6C070").ss(2,1,1).p("ABvjiQABAAACABQASAFAKASQAGAKAAAGQABAIgJAMQgIAHgFAIQgBACgCACQgFAGgDAHQgDAEgCAFQgFALAHANQABABABACQABAEAAAFQgDAGAFAIQAAABAAABQADAIgBALQAAAFAAAEQgBAHgEAMQgCAEgCAEQgCAFgCAEQgOASgOASQgDAHgDAGQgFAGACAFQAAAAAAAAQAQAPAYATQABABABACQAAABABABQALASADAXQADAQgEAKQgEAIgFAFQgLAJgNAGQgMAFgJAHQgHAEgDAHQgCAEgBAHAggkfQABgDACgEQAIgQAQgEQASgHANARQACACACADQALAUAMAQQAEAGAEAGQALAKAMAFQAJAGANACQACABADABQAXAFAKASQAFAIABAGQADAJgMAQQgGAFgEAGQgEAFgDAEQgFAFgDAFQgCADgBAEQgEAMAIANQABAEAAAEQABAFgCAFQAEAGACAHQAAAFAAAFQAAAFABAEQgBAHgFANQgDAJgGAKQgBACgBACQgOAWgPAWQgBACAAABQgGAHgBAGQAAAEABADQARANAVAQQACACACABIAAAAQAOASACAeQAAAJgCAHQgEAOgJAGQgIAGgKAFQgQAHgLAJQgDACgCADQgEAFgBAIIgBABQAAADAAACQgBAPABAQQAAABAAABQAAAOgCAIQAAAEgCADQAAAAAAABQgCACgCACQgDAFgDADQgEAEgEADQgbAWgVgZQgBAAAAgBQgBgBAAAAIgBgBQgBgBgBgBQgBgCgBgBQgBgBAAgCIgBAAQgGgVgBgWIgBgIQAAgGgBgEQgCgRgKgHQgDgEgGgFQgKgGgLgHQgNgFgFgHQgJgJgEgPQgCgJABgLQACgWAIgSQABgEABgBIABAAQAQgRAMgPQABgCABgCQADgEgCgFIAAAAQgBAAAAgBQgFgHgHgJQgJgKgIgMQgNgQgDgVQAAgDAAgEIgBgGQAAgEABgEQACgWANgMQABAAAAgBIABgBQACgCACgCQADgCACgCQADgCgEgCQAAgFgDgEQgEgDgGgDIgXgRQgBAAAAAAQAAAAgBgBQAAAAgBgBQgBAAAAAAQAAAAgBgBQgBAAgCgBQgbgTADglQAAAAAAgBQACglAXAAQAYACAMAAQACAAACgBQAXgEAHgGQAKgJAJgZQABgFACgEQABgDABgDQAIgSARgEQASgGANAPQADADACAEQALAUALAQQAEAHAEAFQAKALANAFQAJAGAOACQACAAACABAA6ECQAAARgDAKQAAABgBABQgBADgCACQgBACgDADQAAABgBABQgEAEgEADQgcAYgXgaQgBgCAAAAAA6DcQAAARAAATAhUjqQAXgEAIgHQAJgIAIgZQACgFACgEAhYjpIAAAAQACAAACgBAh6iMQgBAAAAgBQgcgTACglAhZhdQACgCACgBQADgDADgCQACgDgDgCQgBgEgDgEQgEgDgGgDAg8AoQgGgHgGgJQgKgKgIgNQgNgRgDgTQAAgEAAgEAgdDyQAAgIgBgFQgCgOgIgHQgFgFgIgGQgJgFgJgGQgPgGgFgIQgIgIgDgNQgDgKABgNQADgUAHgRQABgEACgCQAAgBAAgBQARgQALgOQABgCAAgCQAEgEgCgFAgUElQgCgBAAgCQgFgSgBgUQAAgBAAgBAgPEtQgBgCgCgCQgBgCgBgC");
	this.shape_39.setTransform(-0.7,33);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F6C070").ss(2,1,1).p("AA4kWQAEAFADADQANAJANAEQAJAFAPACQAFABADABQAIADAFAFQAJAIAEAOQAEANgEAJQgCAKgNALQgLAIgGAGQgCACgCACQgGAGgDAHQgCADAAADQgDANAOAPQADAEACAFQACAFgBAHQAEAHAAAIQAAAEgBAGQAAAFgBAEQgCAIgFANQgEAJgGAJQgCADgBACQgOATgLAUQgDAHgCAHQgDAGABAGQABABAAAAQANASAXAYQABABABACQABABABABQABABAAAAQAPAVACAbQABAHgCAGQAAACgBABQAAACgBACQgDAHgEAFQgLALgNAIQgMAHgIAHQgGAGgDAHQgCADgBAEQgBAFgBAHQgBAOABARQAAABAAABQAAANgCAJQAAADgBACQAAABgBAAQgBAEgCADQgCADgCACQgBABgBABQgEAEgEAEQAAAAgBABQgbAYgWgZQAAgBgBgBAA4kWQAEAFADAEQALAJAPAEQAKAEAPACQAMADAIAHQAKAIAEANQADALgCAJQgBALgQAPQgHAFgFAFQgGAEgDAEQgGAFgDAGQgDAEgBAEQgDAMANAOQACACACACQADAFABAGQgBAHADAKQAAABAAABQABAJgDAMQgBAFAAAEQgDAIgFALQgBAEgDAEQgCAEgCAEQgQAYgKAYQgBACAAABQgEAIAAAHQAAAEABADQAOARAVAUQACACACABQANATADAWQADAMgCAJQAAADgBACQAAABgBABQgEALgHAHQgIAHgKAGQgQAJgJAKQgDADgCAEQgCADgCAFQAAADgBACQgBARAAAVAgfk8QABgDACgDQAIgRASgDQAUgEAMAVQABACACAEQAKAZANAQAgfk8QABgCABgDQAJgTASgCQATgEAMASQADAEACAFQAKAZAMAQAA3E0QgBACgBABQgBACgCADQgDAEgDAEQgEAEgDADQgcAagXgcIAAAAIAAAAQgBgBgCgCQgBgBgBgBQAAgBgBgBQgBgBgBgCQAAgBAAgBQgBgBgBgBQgDgJgBgKIgDgVQAAAAAAgBIAAgFQAAgIgBgGQgCgRgIgJQgDgFgGgFQgJgHgMgJQgLgHgGgJQgEgFgDgIQgDgFgCgGQgCgHABgIQAAgEAAgFQADgTAJgTQACgEABgDIAAAAQARgVAHgSQAAgCAAgCQACgFgCgFQgFgJgGgKQgIgLgIgMQgMgUgEgTQAAgDAAgCIgBgOQAAgCAAgCIAEgUQADgKAGgHQACgBABgBQABgCACgBQADgDACgCQADgEgCgDQABgFgCgFQgFgEgJgIIgYgSQAAgBgBAAQgBgBgBAAQgDgDgDgDAA6EZQAAAQgDALAgmknQACgFACgHQABgEACgFAgmknQACgFABgGQACgFACgFAhFkFQANgEAFgGQACgDADgDQADgGAEgJIABgDAhFkFQANgEAEgFQADgDADgEAhQkBIALgEAhWkAQAEAAACgBAhWkAIABAAQADAAACgBAiVjaQADgkAXgBIABAAQAXAAAMgBQABABAAgBAh6ieQgEgDgEgEQgUgUABgeAhbhmQABgCACgBQACgDACgCQADgDgCgDQABgFgCgGQgEgEgJgIAhnhTQADgJAGgHQACgCABgBAg/ApQAAgBAAgBQgFgIgGgKQgIgLgIgLQgMgUgEgUQAAgCAAgCAhXBeQARgUAHgSQAAgDABgCQABgFgCgFAhmCUQAAgDAAgDQACgVAKgUQABgEABgCQABAAAAgBAgfENQAAgKgBgHQgDgPgGgHQgEgGgIgIQgIgGgKgIQgNgHgGgKQgEgFgCgGQgDgFgCgHQgBgGAAgIAgWE/QAAAAAAgBQAAAAAAgBQgEgJgCgMAgTFEQAAgBgBgCQgBgBgBgBAgRFGQAAgBgBgBQAAAAgBAAAgOFJQgBgBgBgBQAAAAgBgB");
	this.shape_40.setTransform(-0.6,35.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F6C070").ss(2,1,1).p("AB0kFIABAAQACAAABABQAKADAHAHQAIAIADAQQAEAOgGALQgEALgPALQgMAIgGAGQgDACgCABQgGAGgDAGQgCAEgBAEQgCANARAPQAFAEACAFQADAHAAAHQADAHAAAIQAAAFgCAGQAAAFgBAEQgDAJgGAMQgEAJgGAJQgBACgCACQgRAZgJAaQAAACAAACQgDAHAAAIQABAEABAEQAMASAVAWQADADACACQABABAAABQAMASAEATQABAGAAAGAB0kFQACAAACABQADAAACABQAHADAFAGQAJAJADAPQADAMgDAJQgEAOgSAOQgIAFgGAEQgFAFgEADQgGAFgDAFQgDAEgBAFQgCAMAQAPQADACABACQAEAGACAGQABAIABALQABABAAABQAAAJgEANQgBAFgBAEQgEAIgFALQgCAEgCAEQgCADgCADQgPAUgJAVQgDAIgBAHQgDAGACAHQAAAAAAABQALATAYAbQABABABACQACADACADQAPAVACAZQAAACAAABQABAHgCAGQAAABgBABQgEAMgHAIQgIAJgKAGQgQAKgJALQgDADgBAEQgDAEgBAGQAAACgBABQgCAQAAAXQAAAAAAABIAAAMQgBAGgBAFQAAADgCADQAAABAAABQgBADgCADQgCACgCADQgBABgBABQgDAEgEAEQgPANgNAAQgLAAgMgNQAAAAgBgBQAAAAAAgBIAAAAQgCgBgBgBQAAgBgBgCQgBgBgBgBQgCgDgBgCQAAgBgBgBQgHgSAAgXIAAAAIgBgGQAAgIgBgGQgCgSgHgJQgDgFgGgGQgIgIgMgKQgLgHgGgKQgGgJgEgMQgBgCAAgCQgBgDgBgEIAAgIQAAgFABgEQADgTAJgTQACgFACgDQADgDACgEQAMgSAEgRQAAAAAAgBQAAgCAAgCQACgFgCgGQgBgCgBgCIgBgBQgEgHgEgIQAAAAAAgBQgEgFgDgHIgUgjQgDgIgBgIQgBgFAAgEIgBgIQAAgBAAAAQAAgDAAgCQAAAAAAgBIAEgUQADgJAFgHQACgEADgCIACgBQACgDACgCQACgDAAgEQABgFgCgGAgelNQABgCABgBQAJgRASgCQAVgDALAWQABADACADQADAJADAHIANAXQAFAHAGAFQANAJAOADQAKAEAPACAgelNQAAgBABgBQAJgTATgCQAUgCALAUQADAEABAFQADAIADAHAA1kjQAFAHAGAFQALAJAQAEQAKADAPACAB6CwQgDAIgFAGQgJAMgOAJQgLAHgJAJQgFAFgEAHQgBAEgBAGQgBAEgBAGQgBAOAAASAA1FDQgCACgCADQgCAFgEADQgDAFgEADQgOANgNAAQgLAAgNgOAA5EwQgBAKgDAHAgsknIACgEQAEgJADgMQACgHADgGAhEkRQAMgFAFgFQAEgFADgHAhEkRQANgFAEgGQAEgFADgGAiCitQgVgVACgfQAAgBAAgBQADgkAYgBQAZgBAMgCIARgGAh5imQgBgBgBgBQgEgDgDgCAh5imQAAAAgBgBQgEgDgEgDAhZhuQABgCACgCQADgDgBgDQACgHgCgGQgHgKgegXAhohXQADgJAFgHQADgEACgCAhmgbQgDgIgBgHQgBgFAAgFAhLAVQgEgGgDgHAhAA0QABgGgCgHQgBgBAAgBAhmCaQAAgDAAgDQACgVALgVQACgDABgCQADgFADgEQAMgUAEgQAghEZQAAgKgBgIQgCgOgGgJQgEgGgIgIQgHgHgKgIQgNgJgGgLQgGgHgDgLQgBgCAAgCQgBgEgBgDAgTFRQgBgBgBgCQgCgBAAgCQAAAAgBgBAgPFWQgCgCgCgD");
	this.shape_41.setTransform(-0.5,36.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F6C070").ss(2,1,1).p("AB3kQQAAAAABAAQABAAABABIADABQABAAACABQALAEAGAMQAEAIABALQACAQgHAMQgGANgRALQgNAHgHAFQgDACgBACQgFAEgDAEQgEAFgBAGQgBANAUAQQAFAFADAFQAEAHABAIQACAHgBAJQAAAFgCAGQgBAFgBAEQgEAJgGAMQgEAJgGAJQgDAEgCADQgQAZgHAaQAAACgBABQgCAIABAHQAJAWAZAdQABABABACQABACABACQAAAAABAAQAOAUAEATQABAFAAAFQAAADAAACAB3kQQACAAABABAgglVQABgFADgEQAJgRATgCQAWgCAKAYQACADABAEQAFAQAGAMAgglVQABgEACgEQAJgTAUgBQAVgCAKAWQADAEABAFQAFAQAGAMIAHAMQAFAHAGAFQAPAIAOADQAKADAQACAA1ksQAFAIAGAEQANAIAQAEQAKACAQACACRj9QAEAIACALQABANgEALQgGAPgUANQgJAFgGAFQgGAEgEADQgEADgDAEQgFAFgBAHQgBAMATARQADABACADQAFAFACAHQADAJAAALQAAACAAABQAAAKgGANQgBAEgBAFQgEAIgGAKQgCAEgDAFQgDAEgCAEQgOATgHAVQgDAIgBAHQgCAHACAHIAAAAQABAFACAFQAKATAWAZQABACACACQAOAUAFATQACAIgBAHIAAAEQAAAEgCAEQgDAIgEAHQgJAOgNAJQgMAIgIAJQgFAGgEAHQgCAFgBAIQgBAIgBALIAAAUQAAABAAAAQgBASgEAMQAAACgBACQgBABgBACQgDAFgDAEIgCACQgCADgDADQgdAbgXgcQgBgBgBgCQAAAAgBAAQAAAAAAgBQgBgCgCgCQgCgDgBgCQgBgBAAgCQgDgHgCgHIgDgRQAAgFAAgEIgBgGQAAgLgBgIQgCgPgFgJQgCgEgFgGQgCgCgCgDQgIgHgKgKQgMgJgGgMQgGgKgEgNQgDgLACgNQABgDAAgDIAHgUQAAAAAAgBQADgGADgGQABgDACgDIAAAAQARgaADgVIAAgBQgBgCAAgBIAAgCQABgGgCgGQgBgBAAgBQgEgIgFgKQgDgHgFgHIgHgMQAAAAgBgBIgMgdQgBgFgBgGQgCgFAAgGIgBgLQAAgBAAgBQAAgDAAgDIAIgaQABgDACgCQACgDADgDIABgBQACgDACgCQADgEAAgEQACgGgBgGQgFgKgfgaQgCAAgBgBQgdgYACgiQgBAjAdAXQABABABAAAB6CuQAAAEgBADQgFANgHAJQgHAKgKAHQgQAKgIAMQgDAEgCADQgEAIgBANQAAAGgBAGAAzFRQgBACgBACQgCADgCACQAAABgBABQgBABAAAAAA5EvQAAAOgCAJQgBAFgCAEQAAABgBABAApFfQgDADgDADQgcAagVgaQgBAAgBgBAgykpQAJgNAGgYIADgHAhNkYQAUgIAGgIQAAAAABgBAhWkVQABAAABAAQAEgCADgBQAUgJAHgIAhWkVQABAAABAAQAEgCADgBAiWjsQADglAZgBQAXgBANgCIAAAAAhchyQACgCACgDQACgDAAgDQADgHgBgHAhlhmQABgCACgDQACgDADgDAhogjQgBgFgBgFQgCgGAAgGAhDAnQgEgJgFgLQgEgGgEgGAhAA6IAAAAQgBgCAAgBAhUBqQAAgBABgBQAQgZADgVAhBA1QAAgGgCgIAhIDbQgKgIgHgKQgHgLgEgPQgCgKABgLQAAgEABgFAgjEmQAAgIgBgGQgCgTgFgKQgDgEgEgGQgBgBgBgBQgBgBgBgCAgTFgQgBAAAAgBQgBgCgCgCQgBgBAAgCQgBAAAAgBQgEgIgCgJAgSFhQgBAAAAgB");
	this.shape_42.setTransform(-0.4,38.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F6C070").ss(2,1,1).p("AB6kcQAFABAEACQAKAFAGAMQADAJABANQABAMgEALQgBACAAABQgCAFgDAEQgJALgQAJQgOAHgIAFQgDACgCABQgJAHgDAIAATl5QAJAGAFANQABAEABAEQAKAoATAMQAPAIAQADQAKACARABQARAGAIAOQAEAKABAMQAAANgEAKQgBAEgDAEQgBACgBACQgJALgQAKQgKAFgHADQgGAEgEADQgJAGgDAIIgBAFQgBANAXARQADACACACQAGAHADAHQAEAJgBANQAAABAAABQgBAKgGAOQgCAFgCAEQgFAJgGAKQgBACgBACQgCACgBACQgWAegFAeQAAACAAACQgCAHACAIQABAFACAGQAJAVAVAaQADADACADQANAUAFASQAEAPgEAMQgDAIgEAHQgIAPgOAKQgLAJgIAJQgFAHgDAHQgCAGgCAHQAAAEgBADQAAAAAAABQAAACAAADIgBAQQAAADAAACQAAAEAAADQgBAPgDALQAAADgBADQgCADgBADQgDAFgDADQgEAFgDAEQgBAAAAAAQgBABgBABQgBABgBABQgCACgBABQgLAIgKgBIgGAAQgHgDgJgKQgBgBgBgBQgCgCgCgDQAAAAgBgBQAAgBgBgBQgDgEgBgDQgDgHgCgJIgDgSQAAgEAAgEIAAAAQgBgLgBgJQgCgTgFgKQgBgEgDgEQgCgCgCgEQgBgBgBgBQgHgIgLgLQgJgIgHgLQgEgHgDgHQgDgGgBgHQgDgKACgLQAAgDABgEAATl5QAIAFAFAMQACAEABAGABNiYQAAANAXARQAGAFAEAFQAFAIABAIQACAIgBAJQgBAFgCAGQgBAFgCAFQgEAJgHAMQgEAGgEAHQgCADgBACQgSAXgHAZQgCAIgBAIQgBAGACAIQAHAYAZAgQABABABACQACADACACQASAaACAWQABAJgCAHQgFAOgHAJQgHALgKAHQgQAMgIAMQgCAEgCAEQgDAIgCAMQAAADAAADAA0FUQAAADgBACQgBAEgCAEQgCADgCACQgBABgBABAA4E6QAAANgDALQAAABgBABAgRl6IARgFQAAABAAgBIATAGAgglnQABgCABgCQAFgJAIgGAgglnQACgDABgDQAFgIAHgFAiRjUQgHgOABgRQAAgBABgCQADgkAZgCQAagCAMgDQAKgEAHgEQALgGAFgGQAAgBABgBQAIgNAHgYQABgFACgFIAAgBAh5i4QgBgBgCgBQgOgMgHgOAh5i4QAAAAgBgBQgPgMgIgPAhViOIAAgDQgDgMghgbAhgh2IABAAQACgDADgDQACgEACgEQABgFAAgFAhfh2QACgDACgCQADgEABgEQACgFAAgGAhsheQACgKAFgHQADgEACgDAhsheQACgKAFgHQACgEADgDAhug8IAAgMQAAAAAAgBIACgVAhnghQgDgHgBgIQgCgGgBgGAhnghQgDgHgBgHQgCgHgBgGAhJAfIgBgDQgCgEgCgFQAAAAAAgBQgGgMgIgNQAAAAgBgBIgKgZAhCA1QgBgGgCgIQgCgDgCgFAhLBgIAJgkQAAgBAAAAQAAgDAAgDQAAgFgCgHQgCgFgDgFAhWB1QABgDACgDQAEgIAEgHAg3D2QAAAAAAgBQgHgIgKgKQgMgKgGgNQgEgEgCgGQgDgGgBgHQgDgLACgOQAAgBABgCIAAgDQAEgPAKgSQACgEACgEQAEgGADgHAgkE3QgBgOgBgLQgCgPgEgJQgCgEgDgEQgCgDgEgFAAAF/QgIgDgKgLQgBgCgCgCQgBgBgBgCQAAgBgBgBQgBgCgBgBQgFgJgCgL");
	this.shape_43.setTransform(-0.3,39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-0.1,32.7,81.5);


(lib.soie_cote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// soie_calque
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F6C070").ss(2,1,1).p("ABIGKQgGgDgGgHQgDgEgEgFQgMgTgBgfQgBgjgGgPQgGgPgVgWQgRgUgIgdQgHgZAWgnQAVgogGgdQgFgZgSgmQgRgigCgfQgBggAOgQQAOgPgBgOQgBgNgigcQghgbADgkQADglAZgCQAqgEANgJQATgMALgrQAHgdAWgE");
	this.shape.setTransform(-8.2,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F6C070").ss(2,1,1).p("ABIl/QgWAEgHAcQgSAvgMAJQgIAFgQAEQgNACgRABQgJABgGAEQgKAIgDASQgBACAAADQgDAXAOAWQAHAJAJAIQAYAVAIAMQACAEABAEQACANgNAPQgGAHgCAMQgBAGgBAHQAAAGgBAHQAAAcAPAhQAAACABABQARAlAHAZQACALgBAKQgBAGgCAHQgGAPgIAQQgFAJgEAHQgKAXADAUQAAACABACQAGAWAMAQQADAFAEAFQAOANAIALQAEAGACAFQAGAKABAVQABAIAAAKQABAWAGAPQACAEACAEQABACABACQAEAFADAEQAGAHAGAE");
	this.shape_1.setTransform(-8.2,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F6C070").ss(2,1,1).p("ABIl0QgWAEgHAbQgSAvgMAIQgIAGgPADQgNACgRACQgJAAgGAEQgKAHgEARQgBACAAACQgEAWAOAXQAFAIAJAJQAXAVAJAMQACAEABADQACANgKAOQgGAHgBAKQAAAGgBAHQgBAGgBAGQgCAcAOAhQABABABACQAPAkAJAYQACAKAAAKQAAAGgEAHQgGAOgIAPQgGAIgEAHQgJAVACAWQABACAAACQAGAWANAPQADAFAEAEQANANAJAKQAEAGADAEQAGAKABAUQABAIABALQAAAVAGAQQABAEACADQABACACACQAEAFADAEQAGAHAGAD");
	this.shape_2.setTransform(-8.1,38.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F6C070").ss(2,1,1).p("ABIlqQgWAEgIAbQgSAugLAJQgIAGgPADQgMACgRABQgIAAgHAEQgKAGgFAPQAAACgBACQgFAUANAYQAFAJAJAIQAVAWAJALQADAEABADQADAMgJANQgEAHgBAKQAAAFAAAGQgCAGgBAGQgEAbANAgQABACABABQAQAkAJAYQADAKAAAJQAAAGgFAGQgGANgJAOQgGAIgEAGQgJAUADAXQAAACAAACQAGAWANAPQADAEAEAEQANAMAKAKQAEAFADAEQAHAJACAUQAAAHABALQAAAVAGAQQABAEACAEQABACACACQAEAFADADQAGAHAGAE");
	this.shape_3.setTransform(-8.1,37.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F6C070").ss(2,1,1).p("ABIlfQgVADgJAbQgSAtgKAJQgIAHgPADQgMACgQABQgJAAgGADQgKAFgGAOQgBABAAACQgGATALAYQAFAKAIAIQAVAWAJALQADAEACACQADAMgHAMQgEAGAAAJQABAFAAAGQgCAFgBAHQgGAZAMAgQABACAAACQAQAiAKAYQAEAJABAJQgBAGgFAGQgGALgKAOQgGAGgEAHQgJATACAXQABACAAADQAFAWANAOQAEAEAEAEQANALAKAJQAFAEACAEQAIAJACATQABAIAAALQABAUAFARQABADACAEQACABABADQAEAFADADQAGAHAGAD");
	this.shape_4.setTransform(-8.1,36.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F6C070").ss(2,1,1).p("ABIlUQgVADgJAaQgSAtgKAJQgIAHgOADQgMACgQAAQgJAAgGACQgKAFgHAMQgBACAAACQgHARALAZQAEAKAIAIQATAWAKALQADADABADQAEAKgFALQgDAGABAJQACAEgBAGQgCAFgCAFQgHAZALAhQABABAAACQAPAiAMAXQAEAJACAIQAAAGgGAFQgGALgLANQgHAGgEAFQgIASACAYQAAADAAACQAFAXANANQAEAEAGADQAMAKAKAIQAFAFADADQAIAJACASQABAHAAAMQABATAFASQABADACADQABACACACQAEAFADAEQAGAGAGAD");
	this.shape_5.setTransform(-8,35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F6C070").ss(2,1,1).p("ABJlJQgWADgJAZQgSAtgKAIQgIAIgNADQgMABgQAAQgIAAgGACQgLAFgHAKQgBACAAABQgIAPAJAbQAEAJAHAJQASAWALAKQADAEACACQAEAKgDAKQgCAGACAIQACAEgBAFQgCAEgCAGQgJAYAKAgQAAACABABQAOAiANAWQAFAJACAIQAAAFgGAFQgHAKgLALQgHAGgFAEQgHARABAaQABACAAACQAEAXAOANQADAEAHADQALAJAMAHQAEAEADAEQAJAIADASQAAAGABAMQABATAEASQABADADADQABACACACQAEAFADAEQAGAGAGAD");
	this.shape_6.setTransform(-8,34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F6C070").ss(2,1,1).p("ABJk/QgVADgKAYQgSAtgJAJQgIAIgNACQgMACgPAAQgIgBgHACQgKAEgIAJQgBABgBABQgIAOAIAbQAEAKAGAIQARAXALAKQADADACACQAFAKgCAJQAAAFACAHQADADAAAFQgDAEgDAGQgKAXAJAgQAAABABACQAMAhAQAVQAFAJADAIQAAAFgHAEQgIAKgLAKQgHAFgFAEQgHAPABAbQABACAAACQAEAYAOALQADAEAHADQALAIAMAHQAFADADAEQAKAHACASQABAGABAMQAAASAFATQAAADADADQABACACACQAEAFADADQAGAGAGAD");
	this.shape_7.setTransform(-8,32.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F6C070").ss(2,1,1).p("ABKk1QgWADgKAYQgRAsgKAJQgIAJgMACQgMABgPAAQgIgBgGABQgLADgIAIQgBABgBABQgKAMAIAcQADAKAGAJQAPAWAMAKQADADADACQAFAJAAAIQAAAFADAGQAFADgBAFQgDAEgDAFQgNAWAJAgQAAABAAACQAMAgARAVQAGAJADAHQABAEgIAFQgJAJgLAJQgIADgFAEQgGAOABAcQAAACABADQADAXAOAMQADACAIADQALAIAMAFQAFAEAEADQAKAHADARQABAGAAAMQABASAEATQABADACADQABACACACQAFAFADADQAGAFAGAE");
	this.shape_8.setTransform(-8,31.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F6C070").ss(2,1,1).p("ABKkqQgVADgKAXQgSAsgJAJQgIAJgLACQgMABgPgBQgIAAgHABQgKACgJAGQgBABgBABQgLAKAGAdQADAKAGAJQAOAXANAJQACADADACQAGAIACAHQABAEAEAGQAFADgBAEQgDADgEAFQgOAWAHAfQABACAAABQALAgATAUQAGAIAEAHQAAAEgIAEQgKAIgLAIQgIAEgFADQgGAMABAdQAAADAAACQAEAYAOAKQADADAIACQALAHANAGQAFACADADQAMAHADAQQAAAGABAMQABASADATQABADADADQABACACACQAEAFAEADQAFAFAGAD");
	this.shape_9.setTransform(-8,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F6C070").ss(2,1,1).p("ABLkfQgVACgLAXQgSArgIAJQgIAKgLABQgMABgPgBQgHgBgHABQgKACgKAEQgBABgBABQgMAIAFAeQADAKAFAJQANAXANAJQADADADACQAGAIAEAGQACAEAFAFQAFACgBADQgDADgEAGQgQAUAGAfQABACAAACQAKAeAUAUQAHAIAEAGQABAEgJAEQgKAHgMAGQgIAEgGACQgFALABAfQAAACAAADQAEAYAOAJQACADAJABQALAHAOAFQAFACADACQAMAGAEAQQAAAGABANQABARADATQABADACADQACACACACQAEAFAEACQAFAFAGAD");
	this.shape_10.setTransform(-8.1,29.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F6C070").ss(2,1,1).p("ABLkUQgVACgLAWQgRArgJAJQgIAKgKABQgMABgOgBQgIgBgGAAQgKABgLADQgBABgBAAQgNAHAEAfQACAKAFAJQAMAXANAJQADADAEACQAGAGAGAGQACADAGAEQAHACgCADQgDADgEAFQgSATAFAgQAAABABACQAIAeAXATQAHAHAFAGQABAEgKADQgLAGgMAGQgIADgGABQgFAKABAgQAAACAAADQADAYAPAJQACADAJABQAKAFAPAEQAFACAEACQANAGADAPQABAFABAOQAAAQADATQABAEADACQABACACACQAFAFADADQAGAFAFAC");
	this.shape_11.setTransform(-8.1,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F6C070").ss(2,1,1).p("ABMkKQgVACgMAVQgRArgIAJQgIALgKABQgLABgPgCQgHgBgHAAQgKAAgMABQgBABgBAAQgNAGADAfQACALAEAIQAKAYAOAJQADACAEACQAHAFAHAFQAEADAGADQAIACgBADQgEACgFAFQgTASAEAfQAAACAAACQAIAdAYATQAIAGAFAGQACAEgLACQgMAGgMAFQgIACgHABQgEAJABAgQAAADAAACQADAZAOAIQACACAKABQAKAFAPADQAGACAEACQANAFAEAPQABAEAAAOQABAQADAUQAAACADAEQABABACACQAFAFAEACQAFAFAGAD");
	this.shape_12.setTransform(-8.1,27.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6C070").ss(2,1,1).p("ABNj/QgVABgMAVQgSAqgHAKQgIALgLABQgKAAgOgBQgHgCgHAAQgKgBgMAAQgBAAgCABQgOADACAhQABAKAEAJQAJAYAPAIQADACAEACQAIAFAJAEQAEACAHADQAIABgBADQgEACgFAEQgVASADAfQAAABABACQAGAcAaATQAIAGAGAGQACADgMACQgMAFgNADQgIACgHAAQgEAHABAiQAAADAAACQADAZAPAIQABACALAAQAJAEAQADQAGABAEACQAOAEAEAPQABAEABAOQAAAPADAUQAAADADADQABACACACQAFAFAEACQAFAFAGAC");
	this.shape_13.setTransform(-8.1,26.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F6C070").ss(2,1,1).p("ABNj1QgVACgMAUQgRAqgIAJQgIALgKABQgKABgNgCQgHgCgHgBQgKgBgNgCQgCABgBAAQgQACACAhQABALADAJQAIAYAPAIQADACAEABQAIAEALADQAGACAIADQAJAAgCACQgEACgGAEQgXARADAfQAAABAAACQAFAcAcASQAJAGAHAFQACACgNACQgNAEgNADQgJABgGgBQgEAGABAjQAAAEAAABQACAaAPAHQACABALABQAJADARABQAFABAFACQAPAEADAOQABAEABAOQABAPACAVQAAACADADQABABADADQAFAFADACQAGAEAFAC");
	this.shape_14.setTransform(-8.1,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F6C070").ss(2,1,1).p("ABOjqQgVABgMAUQgSApgHAKQgIAMgJAAQgKABgNgDQgHgBgHgCQgKgCgOgDQgCAAgBAAQgQABAAAiQAAALADAJQAHAYAQAIQADABAEACQAJADANACQAGACAJABQAHABAAABQgEACgGADQgYAQABAfQAAACAAABQAFAbAdASQAJAFAIAFQACACgNACQgOADgNACQgJAAgHgBQgDAFAAAkQAAADAAACQACAaAPAGQACABALAAQAKACARABQAFABAFABQAPAEAEANQABAEABAOQABAPACAVQAAACADADQABABADACQAFAFADADQAGAEAFAC");
	this.shape_15.setTransform(-8.2,24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F6C070").ss(2,1,1).p("ABPjgQgVABgNAUQgRAogHAKQgIAMgJABQgJAAgNgCQgHgCgHgCQgKgDgPgEQgBgBgCAAQgRgBgBAjQAAALACAJQAGAYAQAJQADAAAFACQAJADAPABQAHABAJABQAJgBgBACQgDABgHADQgaAPAAAfQAAABAAACQAEAaAfARQAKAGAIAEQACADgOAAQgPACgNACQgJgBgHgBQgDADAAAlQAAADAAACQACAbAPAFQACABALAAQAKABARAAQAGAAAFABQAQADAFANQABADAAAPQABAOACAVQAAADADADQABABACACQAGAFADACQAGAEAFAD");
	this.shape_16.setTransform(-8.2,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F6C070").ss(2,1,1).p("ABQjVQgVABgNATQgRAogHAKQgIANgIAAQgJAAgNgDQgHgCgHgCQgKgEgQgGQgBAAgBAAQgTgDgCAkQAAALABAJQAFAZARAHQADABAFABQAKACAQABQAIAAAKAAQAKAAgCABQgEABgGADQgcAOAAAeQAAACAAABQACAaAhARQAKAEAJAEQACACgPABQgPABgNAAQgKgBgHgCQgCACgBAmQABADAAADQABAaAQAFQABAAAMAAQAKAAARAAQAGAAAFAAQARADAFAMQABADABAPQAAAOABAWQAAACADADQACABACACQAGAFADACQAGAEAFAC");
	this.shape_17.setTransform(-8.3,22.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F6C070").ss(2,1,1).p("ABRDLQgKgDgKgJQgCgCgCgCQgDgCAAgDQgCgwgBgEQgGgQgcACQgnACgCgBQgSgEABgfQAAgoACgBQARAGAegBQAPAAgCgBQgKgEgIgEQgngRABgcQABgfAegMQAFgDAGgBQABAAgKABQgtACgLgFQgYgJACgrQADgoAXAJQAQAHAKAEQAUAIAQAAQANAAAOgoQAOgpAgAA");
	this.shape_18.setTransform(-8.3,21.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F6C070").ss(2,1,1).p("ABSjKQgCAAgBAAQgiANgKAbQgOAogNABQgRAAgSgHQgMgFgPgHQgXgHgDAmQAAABAAABQgCApAXAJQABAAABABQAMAEAqgCQABAAABAAQAIgBgBAAQgGABgEACQAAABgBAAQgdANgCAeQAAAAAAABQAAAcAmAQQAJAEAJADQABACgNAAIgBAAQgdABgSgGQgBABgBAnIAAABQAAAeARAFQAAAAABAAQADABAkgDQABAAABAAQAbgBAGAOQAAABABABQABAGACAsQAAACAAABQAAACACABQAAABACABQAAAAABABQABABACABQAJAJALAD");
	this.shape_19.setTransform(-8.3,21.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F6C070").ss(2,1,1).p("ABSjKQgBAAgCAAQgjAMgKAaQgNAogMADQgSAAgSgHQgNgFgOgHQgYgIgDAmQAAABAAABQgCApAWAKQABAAABABQAMAEAqgCQABAAABAAQAHgBABAAQgFABgEACQgBABgBAAQgdAMgCAfQAAAAAAABQgBAbAnARQAJAEAJADQACACgOAAIgBAAQgdABgSgGQgBABgBAnIAAABQAAAeARAFQAAAAACAAQAFAAAigCQABAAAAAAQAbgBAGAPQAAABABABQABAIACAqQAAACAAABQABABABACQABAAABACQABAAABABQABABACACQAKAIAKAC");
	this.shape_20.setTransform(-8.2,21.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F6C070").ss(2,1,1).p("ABTDLQgKgBgKgJQgCgBgCgCQgCgCgCgBQgDgCAAgDQgCgwgBgFQgGgPgcABQgnADgCgBQgSgEABggQAAgnACgBQARAGAegBQAPAAgCgCQgKgDgIgEQgngRABgcQABgfAegMQAGgDAFgBQABAAgKABQgtACgLgFQgYgJACgrQADgoAXAJQAQAHAKAEQAUAIAQAAQANAAAOgoQAKgeAUgIQAIgDAJAAQABAAACAA");
	this.shape_21.setTransform(-8.1,21.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F6C070").ss(2,1,1).p("ABNjmQggAJgJAPQgEAIgDAJQgJAcgIAJQgUAHgQgDQgEgBgFgBQgKgCgOgEQgBAAgBAAQgSAAgBAjQAAAFABAEQADAXAJAMQADAFAGAEQADADAIABQALADAXADQACABACAAQAGAAgBABQgEABgGAEQgSALgEAUQgBAHAAAHQACAWAVAQQAGAGAGAFQAHAEAHAEQACACgNACQgDABgFAAQgWADgNgCQgBADgBAYQAAAGAAAHQABAYAKAJQADADAEABQAEADAdABQACAAACAAQAYADAFAPQABACAAAEQABAOAEAhQAAABAAAAQABACACACQABACACABQACACACACQAKAIALAC");
	this.shape_22.setTransform(-7.7,23.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F6C070").ss(2,1,1).p("ABKkCQgBAAgBAAQggAJgIAQQgEAIgCAJQgKAdgGAJQgUAJgQgBQgFgBgEAAQgKgBgMABQgBAAgBABQgPAEABAhQAAAFABAEQAGAXAHALQAEAHADAFQADADAGACQAHAFATAHQACABABAAQAFABAAACQgEACgFAEQgOAMAAAVQAAAHAAAHQAEAXASARQAFAGAFAGQAEAFAGAFQACADgMADQgDABgEABQgTAGgMABQgBAEgBAXQAAAGABAIQAAAWAMALQACADAEABQAFAGAYADQACABACABQAUAHAEAPQAAABABAEQACAPAFAgQAAABAAAAQABACACADQACABABACQACABACACQAKAJAKAC");
	this.shape_23.setTransform(-7.3,26.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F6C070").ss(2,1,1).p("ABGkeQgBAAgBAAQggAJgIAQQgDAJgDAJQgJAfgGAHQgTAMgRAAQgEAAgFABQgJABgKAEQgBABgBABQgMAKADAeQAAAEACAFQAIAXAGALQADAHACAGQABADAEADQADAHAPALQACACABABQAEABAAACQgDADgDAFQgKAOACAVQABAHABAHQAGAXAPASQAEAHAEAHQACAGAEAGQABAEgIADQgEACgEADQgRAHgKAFQgBAGgBAVQAAAGABAIQABAWAMALQACAEAEABQAGAJATAFQACACABABQAQAMAEAOQAAABABAEQACARAHAeQAAABAAAAQABADACACQACACABABQACABACADQAKAIAKAD");
	this.shape_24.setTransform(-6.9,29.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F6C070").ss(2,1,1).p("ABCk5QgBAAgBAAQghAJgGAQQgEAJgDAJQgJAhgFAGQgSAPgRABQgFAAgEACQgJADgIAIQgBABAAACQgLAPAFAbQACAFABAEQALAXAFALQACAIABAGQAAAFABADQgBAKAMAPQABABABABQADADAAACQgCAEgCAFQgGAQAGAVQACAHACAHQAIAYAKAUQADAIADAHQABAHADAGQgBAFgGAFQgDACgDADQgQAKgHAJQgCAIgBASQAAAIABAHQACAVAMANQADADADACQAIALANAJQABABABACQAMAQAEAOQAAACAAACQADAUAIAcQAAAAABABQABADACACQACABABACQACACACABQAJAKALAB");
	this.shape_25.setTransform(-6.5,32.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F6C070").ss(2,1,1).p("AA/lVQgCAAgBAAQghAJgGARQgDAKgDAIQgJAjgFAFQgRARgRADQgFABgEACQgJAFgGAMQAAACgBACQgIAUAHAYQACAFACAEQAOAXADAMQACAHgBAIQgBAFgBAEQgFALAIAUQAAABABACQACADAAADQAAAFgBAFQgCARAJAXQADAGACAGQALAaAHAVQACAIABAJQABAHAAAIQAAAFgGAFQgDAEgDADQgNANgGAMQgCAKAAARQAAAHABAHQADAVALANQADADADADQAKANAIAMQABACAAACQAIAVADANQAAACABACQACAWALAaQAAAAAAABQACADACACQABACACABQABACACABQAKAKALAC");
	this.shape_26.setTransform(-6.1,35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F6C070").ss(2,1,1).p("AA8lwQgCAAgBAAQgiAJgFARQgDAJgCAJQgKAkgDAFQgRATgRAFQgFABgEADQgJAHgEAPQAAADgBADQgFAYAJAWQACAFADAEQAQAXACALQABAJgDAIQgCAGgDAFQgJANAEAXQABACAAACQABAEABAEQAAAFAAAGQADATAMAWQADAHADAFQANAbADAWQABAJAAAKQAAAIgBAJQgBAGgFAGQgCAEgCAEQgLAQgFAPQgCAMAAAPQAAAHABAIQADATANAPQACADADADQAJAQAFAOQAAADABADQAEAYACANQAAACAAACQAEAYAMAYQAAAAAAABQACADACADQACABABACQABABACACQAKAKALAB");
	this.shape_27.setTransform(-5.8,37.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F6C070").ss(2,1,1).p("AA5GNQgNgBgLgOQgDgEgEgFQgOgWgEgaQgCgMAAgoQAAgUgPgWQgSgWAAgcQgBgfAPghQANghAAgdQAAgdgWghQgYglgBgcQgCgfAOgQQAOgQgBgOQgBgMgTgXQgRgVADgkQADgjARgFQAZgIALgUQABgFAOg3QAHgbAgAAQACAAABAA");
	this.shape_28.setTransform(-5.5,40.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F6C070").ss(2,1,1).p("AA8lsQgBAAgCAAQgfABgIAZQgPA2gDAFQgCAGgFAEQgLAJgRAEQgFABgEAEQgIAHgFAQQgGAaAIAXQACAEADAEQAQAYACALQABAIgCAIQgCAGgDAFQgIAMAFAXQAAACABADQABACAAAEQAAAFAAAGQABATANAXQADAGACAEQANAcAFAXQABAHAAAIQAAAIAAAJQgCAGgEAGQgDAFgDAFQgKAOgFAOQgDAMAAARQAAAGABAGQACAVAOAQQABACACACQALAQAGAPQAFAYACAOQAAAFABAEQADAWAKAWQABACACADQAAABABAAQABADACABQABACABABQAMANAMAC");
	this.shape_29.setTransform(-5.8,37.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F6C070").ss(2,1,1).p("ABAlMQgBAAgBAAQgfABgJAYQgQA1gEAFQgCAGgFAEQgMAHgQACQgFABgEACQgJAFgHALQgJAUAGAZQABAFADAFQAMAXAEALQACAIgBAHQAAAFAAAEQgEAKAJARQABACABADQACACAAADQgBAEgBAFQgEARAJAXQACAGACAGQAKAZAJAWQACAGACAIQABAHAAAHQAAAFgFAFQgEADgEAFQgMAMgHAKQgDAKAAATQAAAGABAFQACAXAOAOQABACACABQAKAOALALQAKASADAPQAAAEABAFQACAUAJAYQABACABADQABAAAAABQACACACACQABABABACQAMAMAMAC");
	this.shape_30.setTransform(-6.2,34.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F6C070").ss(2,1,1).p("ABFkrQgBAAgCAAQgeAAgKAYQgQAygFAHQgFAGgDACQgMAGgPAAQgFAAgFABQgJADgJAHQgNANAEAdQABAEACAFQAJAXAGALQACAHABAGQABAEADAEQABAHANANQACACABABQADACAAACQgDADgCAFQgJAPAFAXQABAGACAGQAHAYAOAUQADAGADAGQABAHAEAGQAAAEgHAEQgEADgFADQgPAJgIAGQgCAIgBAVQAAAGABAFQABAZAOAMQACABABABQAJALARAIQAPANAEAPQAAADABAGQACASAGAaQABACACACQAAABABABQABABACACQACACABABQAMAMAMAB");
	this.shape_31.setTransform(-6.6,30.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F6C070").ss(2,1,1).p("ABKkLQgBAAgCAAQgdAAgLAXQgRAwgGAIQgFAGgDACQgMADgQgBQgFAAgEAAQgKAAgLACQgQAHABAgQABAEABAFQAGAXAHALQAEAHADAFQACADAFACQAGAGARAIQACABACABQAEABAAABQgEADgEAEQgNANABAWQAAAGABAHQAFAYASASQAEAFAEAFQAEAGAFAFQABAEgJACQgFADgGABQgRAGgKADQgCAFAAAYQAAAGAAAFQABAZAOAKQABACACABQAGAHAZAFQAUAIAEAPQAAADABAGQACARAEAbQABACACACQAAABABAAQABACACACQACABABACQAMALAMAB");
	this.shape_32.setTransform(-7,27.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F6C070").ss(2,1,1).p("ABPjrQgBAAgBAAQgdAAgNAXQgQAugIAJQgFAFgFABQgLACgPgDQgFgBgEgBQgLgBgNgDQgTAAgBAjQAAAFAAAEQAEAXAIALQAEAGAFAEQAEADAIABQAKAEAWADQACAAACABQAFAAAAABQgFACgFADQgTAMgCAVQgBAGAAAHQACAXAXARQAFAFAGAEQAFAEAHAFQACACgNABQgEABgGACQgUACgMgBQgBADgBAbQAAAFAAAFQABAbAOAIQABACACAAQAEAEAfABQAZADAFAQQAAACABAHQABAPADAdQAAACACACQABAAAAABQACABACACQACACABABQAMALAMAB");
	this.shape_33.setTransform(-7.5,24.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F6C070").ss(2,1,1).p("ABVDMQgOgBgNgNQgDgCgBgBQgDgDAAgCQgCgxgCgEQgFgQgcACQgoACgCAAQgRgFAAgfQABgoABAAQASAGAdgBQAQgBgDgBQgJgEgIgDQgogRABgcQACgfAegNQAHgDADAAQACgBgKABQguACgLgEQgYgKADgqQADgoAWAIQAQAIALAEQAUAIAPAAQAOAAAOgpQAOgpAgAAQADAAAEAB");
	this.shape_34.setTransform(-8,21.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F6C070").ss(2,1,1).p("ABUjXQgCAAgBAAQgcgBgOAYQgQAogHAJQgHAKgHAAQgLAAgPgEQgFgBgFgCQgLgDgPgGQgDgBgEAAQgOACgCAgQAAANACAKQAGAWAQAHQAEACAHABQAKACAPAAQAHABAIAAQAJgBgBABQgDABgHAEQgcAPAAAdQAAADAAACQAEAaAiAQQAHAEAJAEQACACgPABQgPABgNAAQgKgBgHgCQgCACAAAnQAAACAAACQABAbAQAFQABABALgBQALABASAAQAEgBAEABQATACAFAOQAAACABAMQABAOABAZQABACADADQACADABAAQADADADADQALAHAKAC");
	this.shape_35.setTransform(-7.9,22.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F6C070").ss(2,1,1).p("ABTjkQgBAAgCAAQgcAAgNAXQgQApgIAKQgHAJgHAAQgMAAgPgDQgFgBgFgCQgLgCgOgEQgEgBgDABQgNADgBAfQAAANAEAKQAGAWAPAHQAEACAHABQAKADANACQAGABAHAAQAKAAgBACQgFABgGAEQgaAQABAeQAAACAAADQAFAaAgARQAHAEAIAFQACACgOACQgOACgNABQgKAAgHgBQgCAEAAAkQAAADAAACQACAbAPAFQABABALAAQALACARAAQAEABAEABQASACAEAPQABACABAMQABAPACAYQAAADADACQADADAAAAQADADADADQALAIAKAB");
	this.shape_36.setTransform(-7.8,23.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F6C070").ss(2,1,1).p("ABSjxQgBAAgCAAQgcAAgNAYQgQApgIAKQgHAIgHABQgMABgQgDQgFgCgFgBQgLgCgOgBQgDgBgDABQgNAFABAeQABANAEAKQAHAVAPAIQAEACAHACQAIADALADQAFACAHABQAJABgBACQgFABgFAEQgYASACAeQAAACAAADQAGAbAeARQAGAFAIAFQABADgMACQgOADgNACQgJABgGgBQgEAGABAjQAAADAAACQACAaAPAHQACABAJAAQAMADAQABQAEABAEABQARADAEAPQABADABAMQABAQACAXQAAADADADQADACABABQADADACACQALAJAKAB");
	this.shape_37.setTransform(-7.8,25.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F6C070").ss(2,1,1).p("ABRj+QgBAAgBAAQgdAAgMAZQgQApgJAKQgGAIgHABQgOABgQgDQgFgBgFAAQgLgCgNABQgDgBgDABQgMAHACAdQABANAFAKQAJAVAOAIQAEACAGACQAIAFAJAEQAEABAGADQAIABgCACQgEACgFAEQgVATADAeQAAADAAACQAHAcAcASQAGAGAHAFQABADgMACQgMAFgNAEQgIABgHAAQgEAIABAhQAAADAAACQACAaAQAHQABACAJAAQAMAEAPADQAFABADABQAQAEAEAPQABAEAAALQABAQADAYQABADACACQADADABAAQADADADADQAKAJALAB");
	this.shape_38.setTransform(-7.7,26.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F6C070").ss(2,1,1).p("ABRkLQgCAAgBAAQgdAAgMAaQgQAqgJAJQgGAIgHABQgOABgRgCQgFgBgFAAQgMgBgLACQgDABgDABQgLAIADAcQACANAFAKQAKAUAOAJQAEADAFACQAIAFAGAFQAEACAFADQAHACgCADQgDACgFAFQgTAUAEAeQAAACAAADQAJAdAZASQAGAGAGAGQABAEgLACQgMAGgMAFQgIACgHABQgEAJABAgQAAADAAABQADAaAPAIQACACAIABQAMAFAPADQAEABADADQAPAEAEAQQAAAEABALQABARADAXQABACADADQACADABABQADADADADQAKAJALAB");
	this.shape_39.setTransform(-7.7,27.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F6C070").ss(2,1,1).p("ABQkYQgBAAgCAAQgcABgMAaQgQArgKAJQgGAIgIABQgOABgRgCQgFAAgFgBQgMABgLAEQgCAAgDACQgKAJAEAcQACAMAGAKQALAVAOAIQAEAEAFACQAGAGAFAGQACADAEADQAHACgCAEQgDADgEAFQgSAVAGAeQAAACABADQAJAeAXATQAFAGAGAHQABAEgKADQgLAGgMAGQgIADgGACQgGAKACAfQAAACAAADQADAZAPAJQACACAIABQALAGAPAEQAEACADACQAOAGAEARQAAAEABALQABARADAWQABADADADQACACABABQADADADADQAKAJALAC");
	this.shape_40.setTransform(-7.6,28.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F6C070").ss(2,1,1).p("ABQklQgCAAgBAAQgdABgLAbQgRArgKAJQgGAIgIABQgOACgSgCQgFAAgFAAQgMABgKAGQgDAAgCACQgJALAFAbQADAMAGAKQANAUAMAJQAFAEAEACQAGAIADAHQABADADAEQAGACgCAFQgCADgEAFQgQAWAHAeQAAADABACQAKAfAVAUQAFAHAFAHQAAAEgJAEQgKAHgMAHQgHAEgGACQgGAMACAeQAAACAAACQAEAZAPAKQABADAJABQAKAHAOAFQAFACADADQANAGADASQAAAEABALQABASAEAVQABADACADQADADAAAAQADAEADADQAKAJALAC");
	this.shape_41.setTransform(-7.6,30.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F6C070").ss(2,1,1).p("ABPkxQgBAAgCAAQgdAAgKAcQgRArgKAKQgHAGgIACQgOACgTgBQgFgBgFABQgMABgJAIQgCACgCACQgJAMAGAaQAEAMAHAKQAOAUAMAJQAEAEAEADQAFAIABAIQAAAEADAFQAEADgBAEQgDAEgDAFQgNAXAHAfQABADAAACQAMAgASAUQAFAIAEAHQABAEgJAFQgIAIgMAJQgIAEgFADQgHANACAdQAAACABACQADAZAPALQACACAHACQAMAIANAGQAEADADACQAMAHADASQAAAFABAKQABAUAEAUQABAEADADQACACABABQADADACADQALAKAKAB");
	this.shape_42.setTransform(-7.6,31.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F6C070").ss(2,1,1).p("ABPk+QgCAAgBAAQgdABgKAcQgRArgLAKQgGAGgJACQgOACgTAAQgGgBgFABQgMACgIAKQgCACgCACQgHAOAHAZQAEAMAHAKQAQATALAKQAEAEAEAEQAFAIgCAJQAAAFABAFQADAEgBAFQgCAEgDAFQgLAZAJAfQAAACABADQANAgAQAVQAFAIACAIQABAFgIAFQgHAJgMAKQgHAFgFADQgHAQABAaQABADAAACQAEAYAPAMQACADAHACQALAJANAHQAEADACADQALAHADATQABAFAAAKQABAUAFAUQABAEADADQABACABABQADAEADACQAKALALAB");
	this.shape_43.setTransform(-7.6,32.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F6C070").ss(2,1,1).p("ABOlLQgBAAgBAAQgdABgKAdQgRAsgLAKQgHAGgJACQgOACgUAAQgFAAgFABQgMADgIAMQgCABgBADQgHAPAIAYQAFAMAIAKQAQAUALAKQAFAEADAEQAEAJgEAKQgBAFAAAGQADAEgBAGQgDAFgCAFQgJAaAKAfQABACABADQAOAhAOAWQAEAIACAJQAAAFgGAFQgHAKgMALQgHAGgEAEQgIARACAaQAAACABACQAEAYAOANQADADAGADQAMAKAMAHQADAEADADQAKAIADAUQAAAFAAAKQABAUAGAUQABAEACADQACACABABQADADACADQALALAKAB");
	this.shape_44.setTransform(-7.6,34.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F6C070").ss(2,1,1).p("ABOlYQgBAAgCAAQgdABgJAdQgRAtgMAJQgGAGgKADQgOACgUAAQgGAAgFABQgMAEgHAOQgBACgCAEQgFAQAJAXQAFAMAJAJQARAUALAKQAEAFACAEQAEALgGAKQgCAGAAAHQABAEgBAGQgCAFgBAHQgHAaALAfQAAACABADQAQAjALAWQAEAIABAKQAAAFgFAGQgGALgMANQgGAFgFAFQgIATACAZQABACAAACQAFAYAOANQADADAGAEQAMALALAIQADAEACADQAJAJADAVQAAAFABAKQABAVAFATQACAEACADQACACAAABQADAEADADQAKAKALAC");
	this.shape_45.setTransform(-7.6,35.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F6C070").ss(2,1,1).p("ABOllQgBAAgCAAQgdACgJAeQgRAtgMAJQgGAGgLACQgOADgVAAQgFABgFABQgNAFgGAPQgBADgBADQgFASAKAXQAGALAJAKQATATAKALQAEAFACAEQADALgIAMQgDAGgBAHQABAFgCAHQgBAGgBAGQgFAcAMAfQABACABADQAQAjAKAXQADAJABAKQAAAGgFAGQgFAMgLAOQgGAHgFAGQgJAUADAWQAAACABADQAFAXAOAOQADAEAFADQAMANAKAJQAEAEACAEQAIAKACAVQABAGAAAJQABAWAGASQACAEACADQABACABABQADAEADADQAKALALAC");
	this.shape_46.setTransform(-7.6,36.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F6C070").ss(2,1,1).p("ABOlyQgCAAgBAAQgeACgIAfQgRAtgMAJQgHAFgLADQgOADgVABQgGAAgFACQgNAFgFASQgBADgBADQgEAUALAWQAHALAKAKQAUASAJAMQAFAFABAEQACAMgKAOQgEAGgBAIQgBAGgBAHQgBAGgBAGQgCAdANAgQABACAAADQASAkAHAXQADAKAAAKQAAAGgEAHQgEANgLAPQgGAIgEAGQgKAWADAVQABACAAACQAGAXANAQQAEAEAEADQANAOAJAKQADAEADAEQAGALADAVQAAAHAAAJQABAWAHASQACAEACAEQABACABABQADAEACACQAKAMALAC");
	this.shape_47.setTransform(-7.6,38);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F6C070").ss(2,1,1).p("ABOl/QgBAAgCAAQgdACgJAfQgQAugNAKQgHAEgLAEQgPACgVACQgGAAgFADQgNAFgEAUQgBADgBAEQgDAVAMAVQAHALALAJQAVATAJAMQAEAFABAFQACANgMAOQgFAHgDAJQgBAGgBAIQgBAGAAAGQgBAfAPAgQABACABADQASAlAGAYQACAKgBALQAAAGgDAHQgEAOgKAQQgGAJgEAHQgKAXADAUQABACAAADQAGAWAOAQQADAFAEAEQANAOAIALQAEAFACAEQAFAMACAWQABAHAAAIQABAXAHASQACAEACADQABACABABQADAEACADQAKAMALAC");
	this.shape_48.setTransform(-7.6,39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,0,16.5,81);


(lib.chapeau = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chapeau_calque
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F6C070").ss(2,1,1).p("ABYBLQgQAXgWgbQgngygNgLQgPgKg8gUQghgLAQgXQAVgdApgBQAogCAmAbQAmAbAMAmQAMAogUAdg");
	this.shape.setTransform(20.9,30.6,1.034,1.992,0,-21,-28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F6C070").ss(2,1,1).p("Amam4QCsj3DvAAIABAAQDyAACrD3QCLDYAZDpQAEAkACAnQAVAOARARQAKAKABABQAJAMAMAVQBMCLhOCSQggA8gxAqQgxApguAKQgpAAgogRQgQAZgsAhQhEAzhBgBQhBgBgRguQgGgPAAgSIgBgSQgCACgQASQgXASgtACQgrADgTgMQgQgPgMgIIgCALQgCAQgIALQgbAohYgEQhZgEgxgrQgJgIgbgqQgNAGgWANQgSAKgRAAQg4AHg+gqQg8gqgnhGQgqhNABhQQABhbA4hNQAOgNAYgXQAEgEAMgIQACgqAEghQAIhvAnhtQAph1BMhwg");
	this.shape_1.setTransform(-0.2,68.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F6C070").ss(2,1,1).p("Aq1EoQABhaA4hLQAXgVAPgPQAEgDALgIQACgJABgJQADgeACgYQALhxAjhjQABgDABgCQAmhqBEhmQAGgIAGgIQCrjuDugBIADAAQDwABCqDtQAGAKAHAKQBYCMAnCTQAHAaAFAaQAIAmAEAkQABAFAAAEQADAaACAcQACAJACAJQANAJAMAKQAGAFAGAGQADADACADQAFAFABABQAKAMAMAUQAkBCABBEQAABKgoBIQgKASgMARQgIAKgIAJQgUAYgYAUQgwAmgwAIQgBAAgBAAQgnAAgmgPQgEADgEAEQgKAMgPAOQgLAKgPAMQg0Amg0AGQgOADgPgBQgxgBgXgcQgGgHgEgJQgEgIgCgLQgCgGAAgGIgBgIIgCgIQgBABgEAEQgFAFgIAJQgYARgsACQgKAAgJAAQgLAAgLgCQgMgCgIgEQgPgOgNgHQgCAFgBAEQgDAKgFAHQgCADgCACQgDADgDADQgHAHgJAGQgPAJgUAFQgYAGgfgBQgeAAgZgFQgygKgggbQgMgJgZglQAAgBgBAAQgLADgQAHQgDACgDABQgSAJgRABQgWADgWgEQgcgFgdgQQgIgEgIgFQgxgfgkgzQgIgMgIgNQgqhJAAhRgABTmoQgBg/AkgWQAlgXA2AfQA2AfAoBCQAnBCACA/QABAwgmgmQhHhIgWgMQgVgMhGgJQgmgFgCgxg");
	this.shape_2.setTransform(-0.1,70.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F6C070").ss(2,1,1).p("Aq3EkQABhZA5hIQAWgWAPgOQAFgEAKgHQADgIACgIQACgdADgYQALhwAjhhQABgDABgCQAnhoBFhkQAGgIAGgIQCrjlDsAAQACAAABAAQDuAACpDkQAHAKAHAKQBZCIAoCRQAHAZAFAaQAIAmAFAjQAAAFABAFQADAZACAcQADAIACAJQANAIALAJQAHAGAGAGQACADADACQAFAFABABQAKAMAMAUQAkA/ABBFQAABJgpBGQgKARgMAQQgIAKgIAJQgUAXgZASQgvAjgxAIQgBAAgBAAQgmgBgmgOQgDADgFACQgJANgPANQgMALgOAKQgzAlg0AGQgOABgOAAQgwgCgYgbQgGgHgFgIQgEgIgEgJQgCgGgBgHIgBgGIgDgGQgBAAgEAEQgFAFgIAHQgZAQgqACQgKABgKgBQgLABgKgCQgLgCgJgDQgQgMgNgGQgCADgCADQgEAIgGAFQgCACgCACQgDACgEACQgGAHgJAGQgOAJgUAHQgXAGgeABQgcABgbgEQgwgIgigaQgNgJgYgiQAAgBgBAAQgLAAgPAEQgDACgDABQgSAJgRABQgVADgWgDQgcgFgdgNQgIgFgIgEQgxgdglgxQgIgLgIgMQgshHAAhRgABTmcQgBg8AkgWQAlgWA2AeQA2AdAoBBQAnBAACA9QABAwgmgmQhHhGgWgMQgVgLhGgJQgmgEgCgxg");
	this.shape_3.setTransform(-0.1,72.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F6C070").ss(2,1,1).p("Aq5EhQABhZA5hGQAWgWAPgNQAFgEAKgGQADgIADgHQADgdACgXQALhuAkhgQABgCABgDQAnhlBGhiQAGgIAGgHQCqjdDsgBIACAAQDtABCpDbQAHAKAHAJQBaCGAoCNQAHAZAGAaQAIAlAEAjQABAFAAAFQADAZACAbQAEAIAEAHQAMAIAMAKQAGAFAGAGQACADADACQAEAEACACQALANALASQAlA+AABEQABBKgqBDQgKAQgNAQQgHAJgIAJQgVAWgZARQgvAggxAGQgBAAgBAAQgmgBglgNQgEACgEABQgKANgOAMQgLALgPALQgxAjg1AEQgOACgOgBQgtgDgagZQgGgGgFgIQgFgHgFgKQgCgFgCgGIgCgHIgEgEQgBABgEAEQgFAEgIAHQgaAPgpABQgJABgLgBQgKABgKgCQgLgBgIgDQgQgKgOgGQgDADgCACQgFAFgHADQgCACgDABQgCABgEABQgHAIgIAGQgNAJgUAIQgWAIgdACQgcACgagDQgwgHgigYQgPgKgYgfQAAgBgBAAQgLgCgNABQgDACgDABQgSAIgRABQgVADgWgCQgcgEgdgMQgHgEgIgEQgygaglgvQgJgLgIgLQgthFAAhQgABSmPQgBg7AlgVQAlgVA1AdQA2AdAoA/QAnA+ACA7QACAugngkQhHhEgWgMQgVgLhGgJQgmgEgCgvg");
	this.shape_4.setTransform(-0.1,74.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F6C070").ss(2,1,1).p("Aq6EdQAAhXA5hFQAWgVAPgNQAFgEAJgGQAEgHAFgGQACgcADgYQAKhsAkheQABgDABgCQAohjBHhgQAGgHAGgIQCqjUDrgBQABAAAAAAQDsABCoDSQAIAKAHAJQBbCDApCKQAHAZAGAZQAIAlAEAiQABAFABAFQADAZACAbQAFAGAEAHQAMAIALAJQAHAGAFAGQADACACACQAFAFACACQALAMALASQAlA8AABEQAABJgpBAQgLARgMAPQgIAIgIAJQgWAVgZAQQguAdgzAEQAAAAgBAAQgmAAgkgNQgEABgFABQgJAMgNAMQgMALgNAKQgwAig2AEQgPABgNgBQgrgEgcgYQgGgFgGgHQgGgIgFgIQgCgGgDgFIgCgGIgFgCQgCABgEACQgGAFgHAFQgbAPgnABQgJAAgLgBQgKABgKgBQgKgBgIgCQgRgIgOgGQgDACgEABQgGADgHABQgCABgDAAQgDABgEAAQgGAHgIAHQgNAKgTAIQgWAKgbADQgbADgbgCQgvgFgjgXQgRgKgWgdQgBAAAAgBQgLgEgNgBQgDABgDABQgRAIgRABQgVADgWgCQgcgCgcgLQgIgDgHgEQgzgXgmgtQgJgLgHgLQguhCAAhQgABSmCQgBg5AkgVQAlgVA2AdQA2AbAoA9QAnA9ACA6QACAtgngkQhHhCgWgLQgVgLhGgJQgmgEgCgtg");
	this.shape_5.setTransform(0,76);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F6C070").ss(2,1,1).p("Aq8EZQAAhWA5hDQAXgVAOgMQAGgFAIgFQAFgGAGgGQACgbACgXQAKhqAmhdQABgDABgCQAohhBIhdQAGgIAGgHQCpjMDqgBIABAAQDqABCoDKQAHAJAHAJQBeCAAoCGQAIAZAFAZQAIAlAFAhQABAFAAAGQADAYACAaQAGAGAGAGQAMAIALAJQAGAFAFAGQADACACADQAEAEADACQAMANALARQAlA6AABEQAABJgqA9QgLAQgNAPQgIAIgIAIQgWAUgZAPQgtAag0ACQAAAAgBAAQglAAgkgMQgEAAgFABQgJALgMAMQgMALgOAKQguAhg3ACQgOABgNgCQgogEgegWQgHgFgGgHQgGgHgGgIQgDgFgDgFIgDgGIgGAAQgDABgDACQgGAEgIAFQgbAOgmAAQgIAAgMAAQgKAAgJAAQgKgBgIgCQgRgFgPgGQgEABgEAAQgHABgIgBQgCAAgDAAQgDAAgEgBQgGAHgIAHQgMAKgTAKQgVALgaAEQgaAFgbgCQgvgDgjgWQgTgLgWgZQAAgBgBAAQgKgGgMgFQgDABgDABQgRAHgRACQgVADgVgBQgdgCgbgJQgIgCgHgEQgzgUgngsQgJgKgIgLQgvg/AAhQgABSl1QgBg4AkgVQAlgUA2AcQA2AbAoA7QAnA7ACA5QABArgmgjQhHhAgWgLQgVgKhGgJQgmgEgCgrg");
	this.shape_6.setTransform(0,77.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F6C070").ss(2,1,1).p("Aq+EVQAAhWA5hAQAXgWAOgLQAGgFAIgFQAGgFAGgEQACgbADgXQAKhpAlhaQABgDABgDQApheBJhcQAGgHAGgHQCpjDDpgBQAAAAABAAQDpAACnDBQAHAJAIAJQBeB9ApCEQAHAYAGAYQAJAlAEAgQABAGABAGQADAYACAaQAHAFAGAFQAMAIAKAIQAHAGAFAFQADACACACQAEAEADADQAMANALAQQAlA4AABEQAABJgqA7QgLAPgOAOQgIAIgIAHQgWAUgaANQgsAXg1ABIAAAAQglAAgjgLQgFgBgFAAQgJALgMAMQgMALgNAJQgtAfg3ACQgOAAgNgCQgmgEgfgVQgHgFgHgGQgHgHgHgHQgDgFgEgFIgEgFIgHACQgCABgDACQgHAEgHADQgcANglAAQgHAAgNgBQgKABgJAAQgJAAgJgBQgRgEgPgFQgEAAgFgBQgIgCgJgCQgCgBgDgBQgEgBgEgBQgGAHgHAHQgMAKgSALQgVAMgYAGQgZAFgcAAQgugCgkgUQgVgMgUgWQgBAAAAgBQgLgIgKgIQgDABgDABQgRAGgRACQgVAEgVgBQgcgBgbgHQgIgCgHgDQgzgSgogqQgJgJgIgLQgxg9AAhPgABSlpQgBg2AkgUQAlgUA2AbQA2AaAoA6QAnA5ACA3QABAqgmgiQhHg+gWgLQgVgKhGgIQgmgEgCgqg");
	this.shape_7.setTransform(0,79.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F6C070").ss(2,1,1).p("AmclfQCsjKDwAAIAAAAQDyAACrDKQBgB6ApCAQAIAYAGAYQAIAlAFAfQAEAdACAgQAVALARAOQAIAHAIAIQBDBBAABcQAABdhDBAQgIAHgIAHQg+AzhUAAQgpAAgogOQgJAMgLALQg0AyhJAAQgyAAgtgbQgOgJgQgOIgMgOIgOAHQgjASgrAAQgHAAgNgBQgJABgKAAQgrAAgjgSIgOgHIgMAOQgMALgRAMQgqAbg2AAQhJAAg0gyQgLgLgJgMQgoAOgpAAQgdAAgagGQg8gOgvgtQhDhAAAhdQAAhcBDhBQAXgXAfgRQACgiAEgbQAIhaAnhZQAphgBMhbg");
	this.shape_8.setTransform(0,81.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F6C070").ss(2,1,1).p("ArPEJQgCggALgbQAUg1AvgnQAcgVAcgOQACgaADgUQAIhMAWg9QALgdAOgdQAZg1Alg0QAdgnAjgmQCLiUC1geQA0gJA0ABQDDAECUB+QAoAiAjAqQA1BCAjBFQAHAOAGANQAHAPAGAPQACAHACAGQAGAPAFAQQAEAIAFAIQAGAOAHAPQADAHADAGQANAfAIAfQADAKADAKQAEASADAUQAJAGAIAHQAIAHAIAIQAHAIAGAIQAIAKAGAJQAVAiAGAlQAEAfgFAgQgEAegMARQgNAdgbAcQgNAOgQANQgIAIgIAHQgGAEgFAFQggAYgnAJQgeAIgjgFQgHgBgHgBQghgGgggMQgKAJgMAKQgBAAgBABQgpAfgwAPQgQAFgRABQgFABgFAAQgRABgRgDQgagFgZgRQgOgJgQgOQgGgHgHgGQgHADgHACQgFACgFACQghAMgkADQgEABgHAAQgDAAgDAAQgLACgJABQgQACgOgCQgSgCgPgIQgHgDgHgFQgHgDgGgEQgDACgDACQgDADgEACQgLAHgRAJQgaAMgfAFQgUADgUACQgfABgagDQgUgDgRgJQgPgGgOgKQgEgEgFgEQgHgGgGgGQgNADgNACQgbABgZgBQgegCgbgGQgdgHgZgKQgdgMgbgWQgEgEgDgDQgigegSgmQgRgkgCgpgABblNQgCgzAmgTQAlgSA3AZQA3AZApA2QAoA2ACAzQACAngogfQhIg7gXgKQgVgJhIgIQgmgDgCgog");
	this.shape_9.setTransform(-0.7,83.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F6C070").ss(2,1,1).p("ArjEAQgDghAOgaQAYgzAygjQAhgTAZgNQACgZADgVQAKhMAZg9QALgdAQgdQAcgzAogzQAfgmAlglQCQiLC7gZQA1gHA0ACQDFAHCWB+QAoAjAjApQA3BEAiBFQAGAOAGANQAGAQAGAQQACAGACAGQAGAQAFAQQADAHAIAHQAIAMAJANQAEAGAEAGQARAaAMAcQAFAKAEAKQAHAQADAUQAIAGAHAIQAIAJAGAJQAGAIAEAJQAGAKAEALQAPAjgBAjQgBAegMAbQgGAZgQAKQgSAVgeAZQgOAMgRANQgIAHgJAIQgGAFgFAEQggAagnAIQgeAGgjgJQgHgCgHgDQgggKgfgLQgMAGgNAIQgBABgBAAQgsAaguAUQgPAIgPACQgGACgEAAQgRAEgRgCQgZgEgagTQgOgKgQgNQgHgGgHgGQgHACgIACQgFABgFACQgiAJgjAHQgFABgDABQgEABgEAAQgLAEgJABQgQAEgOgCQgRgCgQgJQgFgCgIgGQgGgEgGgFQgDABgDABQgDACgEABQgLADgRAGQgaAGggAFQgTADgVACQgeADgZACQgUADgQgHQgPgDgPgIQgFgDgEgDQgIgFgHgGQgMACgNAAQgcgCgXgDQgegFgagGQgegHgagHQgdgIgegVQgEgDgEgDQgjgcgVglQgVgjgEgogABgk/QgBgxAmgSQAngSA4AZQA4AYAqA0QAoA0ADAxQABAmgogeQhKg5gXgJQgWgKhJgHQgogDgCgng");
	this.shape_10.setTransform(-1.1,85.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F6C070").ss(2,1,1).p("ABkkxQgBgvAngSQAngRA5AYQA5AXArAyQAqAzACAwQACAkgqgdQhLg3gYgJQgWgJhKgHQgpgDgCgmgAr4D3QgFgiAQgZQAegxA0gfQAmgRAWgLQADgaADgUQAKhNAcg9QANgdARgcQAegzArgxQAigmAngiQCViDDBgUQA0gGA2ADQDHALCXB+QAqAkAjApQA3BEAhBGQAHAOAFAOQAGAPAGARQACAGABAHQAFAQAFAQQADAGALAGQAJAKAMAJQAFAFAFAFQAVAZAQAZQAGAJAFAJQAKAPAEAUQAHAHAGAJQAHAKAFAKQAEAJADAJQAEALACALQAJAlgHAhQgIAegRAVQgJAUgVAEQgVANgiAVQgPAKgSANQgJAHgJAIQgFAFgFAEQggAbgpAHQgdAGgjgPQgHgCgHgEQgegOgggLQgMADgPAGQgBABgBAAQguAUgsAbQgPAJgOAEQgGADgDAAQgRAHgRgCQgYgCgcgWQgOgKgPgMQgIgGgIgGQgHACgHABQgGABgFABQgkAHgfALQgFABgFACQgEABgEABQgKAFgJACQgQAFgNgBQgSgBgPgLQgFgCgIgHQgFgEgGgFQgDAAgDgBQgDABgEAAQgLgBgQADQgbABggAEQgUACgUADQgeAFgYAIQgUAHgPgEQgOAAgRgGQgFgCgFgCQgIgEgIgGQgMABgNgCQgcgGgWgEQgdgIgagGQgegHgbgEQgdgEgggTQgFgDgEgDQglgZgZglQgYgjgFgmg");
	this.shape_11.setTransform(-1.3,87.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F6C070").ss(2,1,1).p("ABkkiQgBguAogRQAogQA6AWQA7AWArAxQAqAxADAuQABAjgpgcQhOg1gYgJQgWgJhMgGQgpgEgDgjgAsRDuQgHgiAUgaQAiguA2gbQArgOAUgKQADgaAEgVQALhNAeg9QAOgcATgcQAggyAvgwQAjglApggQCah7DHgPQA1gEA2ADQDKAPCYB+QAqAkAjApQA6BFAgBHQAFAOAGAPQAGAPAEARQACAHACAGQAFARADAQQAEACAOAGQALAJAOAIQAGAEAFAFQAaAVAUAWQAHAIAHAIQALAOAGAUQAGAIAFAKQAGAKADALQADAKACALQACALAAAMQACAngNAfQgOAcgWAQQgNAPgZgDQgZAFglASQgRAIgSANQgJAHgKAJQgFAEgGAFQgfAcgpAGQgeAEgjgTQgGgEgHgEQgegSgfgLQgNABgQAEQgBAAgBABQgwAOgrAgQgPAMgMAFQgGAFgCgBQgRAKgRgBQgYgCgdgXQgNgMgQgKQgIgGgIgFQgIAAgHABQgGABgGAAQgkAFgfAPQgEACgFACQgEABgEACQgKAGgJADQgQAHgMgBQgSAAgPgMQgEgCgIgJQgFgEgGgGQgDgBgDgBQgDgCgDAAQgMgEgQgBQgagEghACQgVACgTAEQgeAHgXANQgTAMgOAAQgPACgRgEQgFgBgGgCQgIgDgJgFQgMAAgNgDQgcgKgVgGQgdgKgZgHQgfgHgcAAQgdgBgjgSQgEgCgEgDQgngXgcgkQgcgigHglg");
	this.shape_12.setTransform(-1.2,89.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6C070").ss(2,1,1).p("ABjkUQgCgsApgQQAogQA8AWQA8AVAsAvQArAvADAtQABAigqgbQhQg0gYgIQgXgJhNgGQgqgDgCgjgAssDlQgIgjAWgYQAngsA5gXQAwgNARgIQADgaAEgVQAMhNAhg+QAQgcAUgbQAigxAygvQAmgkArgeQCehyDOgKQA2gDA2AEQDMATCZB9QArAmAjAoQA7BFAfBIQAFAPAGAPQAFAPAEASQACAHACAGQAEAPADAQQAEAEARAFQAMAGARAHQAGADAHAEQAdARAZAUQAIAGAIAHQAOANAGAVQAGAJAEALQAEALACALQACALAAALQABAMgCANQgEAogUAdQgUAcgcALQgPAKgfgKQgbgDgpAOQgTAHgSANQgKAHgKAIQgFAFgGAFQgfAdgqAFQgeADgigYQgHgEgGgFQgdgWgfgMQgOgCgRADQgBAAgBAAQgzAJgpAmQgPAOgKAGQgGAGgCAAQgQAMgRAAQgYAAgegaQgNgMgQgKQgIgGgJgEQgIAAgHAAQgHAAgGAAQgjADggASQgEADgFACQgDACgEACQgJAHgJAFQgQAIgMAAQgTAAgOgOQgDgBgIgKQgFgFgFgGQgDgCgEgDQgDgCgDgCQgMgIgPgEQgagJgiACQgVAAgTAGQgdAIgWATQgTARgNACQgPAGgSgCQgGAAgGgCQgJgCgJgEQgMgCgNgEQgcgOgUgHQgcgNgagHQgfgIgdADQgdADglgQQgEgCgFgDQgpgUgfgjQgfgigJgkg");
	this.shape_13.setTransform(-0.8,91);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F6C070").ss(2,1,1).p("ABfkFQgCgrAqgQQApgPA9AVQA9AVAtAtQAsAtADArQABAhgrgaQhRgygZgIQgXgIhPgGQgrgDgCghgAtJDcQgKgkAZgYQAsgpA7gTQA1gLAPgGQADgaAEgVQANhOAlg+QAQgbAVgcQAmgvA0guQAogjAtgdQCkhpDTgFQA3gCA2AGQDOAWCbB9QAsAmAjApQA8BGAeBIQAFAPAGAPQAEAQAEAQQACAHABAHQAEARADAQQAEADAUAEQANAEATAFQAIACAHADQAiANAcARQAKAGAJAHQARALAHAVQAFAJADAMQADAMAAANQABALgBAMQgCANgDANQgLAqgaAcQgaAagiAGQgSAFgjgRQgfgLgsALQgVAFgTANQgKAGgKAKQgGAEgFAFQgfAfgrADQgeADgigdQgGgGgHgGQgbgagegLQgQgFgSABQgBAAgBAAQg2AEgnAsQgOAQgJAHQgGAHgBAAQgQAPgRABQgXABgfgcQgOgNgQgJQgIgFgKgEQgIgBgIgBQgGAAgGAAQglAAgfAWQgEADgEADQgDADgDACQgKAJgJAFQgQAKgMAAQgSAAgOgOQgCgCgJgLQgDgFgGgGQgDgEgDgEQgDgDgDgDQgMgMgPgHQgagOgjAAQgVABgTAGQgdAKgVAZQgSAVgMAFQgPAJgTAAQgHABgGgBQgJgBgKgEQgMgDgNgGQgdgRgSgJQgcgQgZgHQgggIgdAHQgeAGgngPQgFgBgFgDQgqgSgjgiQgjghgKgjg");
	this.shape_14.setTransform(-0.3,92.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F6C070").ss(2,1,1).p("Anej7QDGidEWAAIAAAAQEWAADECdQB9BsAtBzIAKAdQAFAPADATIADAOIAFAiQAIADA4AHQA+AMAuAaQAcAPAGAnQAFAlgQAqQgRArghAaQglAdgugDQgJAAgogXQgjgTgwAHQgnAGgiAjQgfAggsADQgiACgqgwQgqgwg0gCQg4gBgmAxQgbAjAAAAQgQARgSACQgWADgggfQghgggrgCQgugBgfAgQggAigUAAQgSABgOgQQgCgCgXgiQgjg1g7gBQg2gBgjAyQgSAagKAIQgUAQgdAAQgTAAgagQQgdgVgRgKQg9gqg2ASQghALgwgSQgtgQgmggQgmgigMghQgMglAcgXQAygoA+gOQA5gJAMgEQADgbAFgVQAJhGAshGQAvhKBYhIg");
	this.shape_15.setTransform(0.4,95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F6C070").ss(2,1,1).p("ABcj0QgCgoArgPQArgOBAAUQA/ATAvArQAuArADApQABAfgtgZQhUgvgagIQgZgIhRgFQgtgDgCgggAuDDLQgNghAZgUQA5gnBCgOQA4gJANgDQAHgLACgJQACgNACgKQACgLACgKQALg9Ang8QA1hOBWhEQDLibEZAAQAFAAACAAQEXABDFCXQAHAHAHAGQB3BlAsBsIALAdQAEAQADARQAAAAABACIACALIABADIAEAbQABADACADQAKADA2AJQAHABAIADQA2AMAqASQARAIALAOQAJAKAEANQAFANAAARQgBAWgLAaQgEAIgFAJQgRAegcAVQgHAGgIAEQggATglgBQgIAAgTgIQgHgEgRgHQgNgGgPgEQgagFgeADQgSACgSAHQgVAJgUASQgOAMgQAJQgUAMgZAEQgSACgUgIQgUgJgWgVQgNgLgNgKQghgagmgDQgPAAgPACQgnAHgcAfQgKAKgHAIQgMANgCACQgRAQgRACQgHACgHgCQgSgDgXgVQgEgDgEgDQgegagngCQgCAAgDAAQgsAAgeAdQgDADgDACQgdAcgSABQgDABgCAAQgQgBgMgNQgBgBgCgCQgFgFgQgVQgCgDgBgCQgggpgygHQgIgBgJAAQguAAgfAfQgIAIgHAIQgTAXgOAGQgIAFgJADQgPAFgSgCQgIgBgJgDQgMgEgQgJQgJgGgIgGQgSgMgNgGQgrgagnACQgSABgSAEQgYAFgggHQgNgDgNgFQgpgPglgcQgDgCgEgDQgngggNghg");
	this.shape_16.setTransform(0.4,95.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F6C070").ss(2,1,1).p("ABdjuQgCgoAsgOQAsgPBBAUQBAATAwArQAvAqADAoQACAfgvgZQhWgugagIQgZgHhTgGQgugDgCgfgAuhDFQgOghAdgSQA7giBFgNQA2gIAQgEQANgJABgGQACgMACgLQACgLACgKQALg9Aog9QA2hOBZhEQDOiZEegBQAFAAADAAQEaACDJCSQAHAGAIAGQB7BmAuBsIALAcQAFAQADARQABABAAABIAIAqQABADADACQANAEAzAKQAIABAHACQA3AMArAQQATAGAOAKQALAHAGAMQAIAMABAQQAAAXgNAaQgEAIgFAIQgTAfgdAUQgIAGgIAEQggATglAAQgKABgRgGQgGgCgVgHQgMgFgRgEQgZgGgfADQgSABgTAGQgWAHgVAQQgQALgPAKQgVAOgYAEQgSAEgVgFQgVgFgYgSQgOgLgOgLQghgYgmgFQgPgBgQABQgpAEgeAaQgKAJgIAIQgLAMgFADQgRAPgQAEQgHACgHgBQgTgCgXgUQgEgDgEgDQgegagogDQgDAAgDAAQgtAAgfAbQgDADgCADQgeAbgTADQgDAAgDAAQgQgBgNgLQgBgBgCgCQgEgEgSgVQgCgCgBgDQgigmg1gEQgJgBgIAAQgvABggAdQgIAHgIAIQgTATgRAGQgJADgKACQgPADgRgDQgIgBgKgEQgLgFgRgKQgJgFgJgGQgSgLgOgHQgtgWgpAGQgRACgTACQgZADgggJQgNgDgNgFQgpgPgmgbQgDgDgEgCQgqgggOgfg");
	this.shape_17.setTransform(0.5,96.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F6C070").ss(2,1,1).p("ABdjpQgBgnAtgPQAsgOBDAUQBBATAxAqQAwApADAoQACAegwgYQhXgtgbgIQgagIhVgFQgugDgDgfgAu+C+QgQghAhgQQA8gcBJgNQA0gIATgDQASgGABgEQACgMACgLQACgLADgKQAJg+Aqg+QA3hOBchDQDRiXEjgBQAEAAAEAAQEeAADNCPQAIAGAHAFQCBBlAwBsIALAdQAFAQAEARQAAABAAABIACAMIABADIAFAcQACABAEACQAQAFAwALQAIABAHACQA4ANAtALQAUAFAQAHQAOAFAIAJQALAKABARQACAXgPAaQgEAIgFAIQgVAegeAVQgIAFgIAEQgiATgkACQgMABgQgDQgDgBgagHQgMgEgRgEQgagGgeACQgUABgUAEQgXAFgWAOQgQAKgQAMQgUAOgYAHQgTAFgVgDQgXgBgZgQQgOgJgQgLQghgYgmgGQgQgDgQABQgqACggAVQgLAHgKAJQgKAJgGAFQgTAOgPAEQgHADgGgBQgVABgXgTQgEgDgEgEQgegagpgDQgDAAgDAAQgugBggAaQgCADgDACQgfAcgTADQgDABgDAAQgRAAgNgKQgBgBgCgCQgEgDgUgVQgCgDgCgCQgjgjg4gDQgJAAgJAAQgvACggAbQgJAIgIAGQgVAQgUAEQgKADgLABQgOABgRgEQgIgDgJgEQgMgFgSgKQgJgFgKgHQgRgKgQgGQgugTgqAJQgRADgUABQgZAAghgJQgNgEgNgFQgqgQgmgaQgEgCgDgDQgsgfgPgeg");
	this.shape_18.setTransform(0.6,97.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F6C070").ss(2,1,1).p("AoKjmQDXiVEtAAIABAAQEtAADVCVQCHBnAxBtIALAbQAFAOAEASIACAOIAGAfQARAGBGARQBTATA8AIQAnAGAEAfQADAcgbAkQgbAlgrAXQgxAagygDQgBAAg8gOQgrgJg2AHQgqAGgnAfQgjAdgxACQglACgtggQgwgig4gBQg9gCgoAgQgrAhgWACQgYADgdgaQgggcgugBQgzgCgiAeQgkAggVAAQgUABgOgLQgDgCgXgWQglgkg/gBQg8gBgnAeQgnAegugBQgVAAgbgNQgQgIgigUQhDgkg6ARQgkAKg9gTQg4gSg0ghQg0gigQgdQgTgiAlgOQA8gWBVgNQBYgOACgBQAEgZAFgUQAJhCAwhCQAzhHBfhEg");
	this.shape_19.setTransform(0.7,98.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F6C070").ss(2,1,1).p("AujDeQgQgiAggQQAxgeBJgVQAfgIASgGQAJgCAIgDQAZgHABgDQADgZAFgVQAKhIAohBQAfg0AygzQAYgYAbgYQBVhKBmgxQCGhFCigMQBigLBeAOQC3AdCOB0QA6AwArA1QAyA8AaA/QAGAPAFAOQAFAPAEASQACAIABAEQADAQAEAQQAPAMA+AVQBKAcA0AUQAVAGAKAOQAFAIACAMQABAIgBAIQgCAMgFANQgDAKgGAKQgQAZgPARQgHAJgIAIQgGAGgHAFQgFAGgHACQgPAKgQAIQgRAHgSACQAAAFgygHQgagBgdAGQgOADgOAFQglAMgkAiQgSASgWALQgSAIgTADQgkAJgrgXQgCgBgCgBQgqgQgwgCQgFAAgEAAQgggBgbAEQgWAKgTARQgMAJgKAHQgbATgQAEQgaAFgdgWQgGgEgGgDQgfgRglgGQgKgCgIgBQgPgBgOADQgIACgIAEQgGADgGAHQgDACgCACQgfAbgWABQgVAAgOgJQgEgCgLgKQgFgFgHgHQgGgGgHgFQgEgCgFgCQgLgEgOgBQgVgDgbABQgdABgaAHQgaAFgVALQghATgkgBQgHAAgIgCQgRgCgWgNQgEgBgDgBQgJgDgQgFQgLgEgPgHQg1gYgxgDQgMAAgLABQgkAEg4gYQgPgHgOgHQglgUghgcQgvgkgOgigABikXQgCguAtgQQAsgRBCAXQBBAWAwAxQAwAwADAvQACAjgwgdQhWg0gbgKQgZgIhVgHQgugDgCgkg");
	this.shape_20.setTransform(0.1,84.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F6C070").ss(2,1,1).p("AtrEDQgOgiAcgTQAqgmBCgeQAegLARgJQAIgCAJgEQAUgJABgGQADgbAEgVQAJhKAjhDQAbg4Asg2QAVgbAYgbQBNhSBeg9QB+haCZgaQBhgWBhAMQC3AYCOCFQA4AzAqA5QAvA/AaBBQAGAPAFAQQAFAPAFASQACAHABAHQADARAEAQQAPASA1AYQBBAlAtAdQASAJAIAPQAFAJABAMQABAIgBAIQgBAMgEANQgDALgFALQgMAbgNASQgEAJgFAIQgEAHgFAGQgDAHgEADQgMAKgLALQgOAKgOAGQADAJgqAAQgUAFgZALQgMAGgMAHQgfASghAlQgQATgUANQgQALgSAGQgiAPgpgNQgCAAgCgBQgrgFgvABQgEAAgFAAQgggCgcABQgUALgUATQgLAKgKAIQgaAUgSAFQgaAHgegRQgGgDgHgDQgigOgigLQgIgDgIgDQgOgEgMgBQgGgBgGACQgFADgHAIQgCACgDADQgdAagaABQgVABgOgJQgFgCgKgJQgGgGgGgGQgHgHgHgFQgDgBgEAAQgKAAgNABQgUACgaADQgdADgdAEQgaAFgVAIQgjANgjgHQgHAAgHgEQgQgEgVgQQgDAAgEgBQgJgBgPgDQgNgBgOgGQg1gSgzgMQgLgBgMgBQgjgDg0gdQgNgIgNgJQgigYgegfQgpgogMglgABmlMQgCg1ArgSQArgUBAAaQA/AaAvA4QAuA4ADA1QACApgughQhUg8gagLQgZgKhRgIQgtgDgCgqg");
	this.shape_21.setTransform(-0.6,69.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F6C070").ss(2,1,1).p("AszEpQgLgjAWgWQAkguA8gnQAbgNARgMQAHgDAJgFQARgMAAgIQADgbADgWQAHhMAehGQAYg7Amg7QASgdAWgdQBDhbBWhJQB3hwCRgmQBgghBjAKQC4ATCOCVQA1A2ApA+QAtBCAaBDQAFAQAGAPQAFAQAEASQACAIACAHQADAQAEARQAPAYAsAeQA3AsAmApQAPALAHAQQAEAKABAMQABAIgBAIQAAAMgEAOQgCALgDAMQgKAbgKAUQgBAKgCAJQgCAHgCAGQgBAJgDACQgIAMgHAOQgJANgKAJQAEAOghAHQgPALgUAPQgJAIgLAKQgaAYgdAoQgOAUgTARQgOAMgRAJQgfAVgngCQgCAAgCAAQgsAGguADQgEAAgFAAQgggCgdgDQgSAOgUAUQgLAKgLAJQgZAUgSAHQgcAKgdgNQgHgCgHgCQglgMgfgQQgIgEgGgFQgNgHgKgFQgGgDgFgBQgEADgIAKQgCACgDADQgZAZgdACQgWABgOgIQgHgCgJgJQgGgGgGgGQgHgIgHgFQgDABgDABQgIAEgMAEQgSAGgbAFQgcAEgfAEQgbADgWAEQglAIghgMQgGgBgIgGQgOgGgUgTQgDAAgEAAQgJABgPAAQgNABgPgEQg1gNg0gUQgLgDgLgCQgjgKgvgiQgMgJgMgLQgfgdgagiQgkgqgKgpgABpmAQgBg8AqgVQApgWA+AeQA+AdAtA/QAtA/ACA9QACAugsglQhRhFgagMQgYgLhPgJQgsgEgCgvg");
	this.shape_22.setTransform(-1.2,55.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F6C070").ss(2,1,1).p("ABtm1QgBhCAogYQApgZA8AhQA7AhAsBHQAsBGACBDQACA0grgpQhPhNgYgNQgYgNhMgKQgqgEgDg1gAr7FNQgJgiASgZQAdg3A1guQAZgQARgQQAGgDAJgHQANgOABgLQACgbADgXQAFhOAZhIQATg/Ahg+QAQggASggQA7hjBOhWQBviFCIgzQBggrBlAHQC5AOCPCnQAyA4AoBDQApBEAaBGQAGAQAFAQQAGAQAFASQABAHACAHQAEASAEARQAOAeAkAiQAtA4AfAxQALANAGARQAEAKAAAMQABAJAAAIQgBANgBANQgCAMgDAMQgGAegIAVQACAKABAJQAAAIAAAHQACAKgCADQgDAMgDASQgEAPgGANQAEATgXANQgKARgPAUQgIALgIALQgVAfgZAqQgNAXgRASQgNAPgOAMQgeAbglAHQgCABgCABQgsARgtAGQgFAAgEAAQgggCgegHQgQAPgWAWQgKALgLAKQgZAUgTAJQgcANgegJQgHgBgHgCQgogJgcgVQgHgGgGgGQgLgKgHgKQgFgEgEgEQgEADgIALQgCADgCADQgbAYgdACQgXABgPgHQgHgCgJgIQgGgHgGgGQgHgIgHgFQgCACgDADQgGAIgLAGQgRALgbAHQgbAFghADQgcACgXABQgmACgggSQgGgCgHgHQgNgJgSgVQgEABgEAAQgKACgOADQgOAEgPgDQg0gHg2gcQgLgFgKgEQgjgRgqgmQgLgMgLgMQgcghgXglQgegugIgtg");
	this.shape_23.setTransform(-1.9,41.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F6C070").ss(2,1,1).p("ABtnpQgBhKAngaQAngbA6AkQA6AkAqBPQAqBNADBKQABA5gpgtQhMhVgYgPQgWgNhLgMQgpgEgCg6gArHFyQgGgiANgcQAWhAAvg2QAWgTARgSQAGgEAJgJQAJgQAAgNQACgcACgYQAEhQAUhLQAPhCAbhCQAOgiAPgiQAyhsBGhjQBniaCAg/QBgg2BmAEQC6AKCPC3QAvA6AoBIQAmBHAaBIQAFARAGAQQAFARAFASQACAHACAHQAEASAEARQAOAkAbAnQAkBBAXA8QAJAPAEATQADAKABAMQAAAJAAAIQAAAOgBANQAAANgCAMQgEAfgEAXQAEAKAEAKQACAIADAIQAFAMgCACQABANACAWQAAASgCAQQAFAYgOATQgFAXgKAZQgFANgGANQgQAmgWAtQgLAYgPAVQgMARgNAOQgcAigiARQgCACgCABQgtAdgsAIQgFAAgEgBQgggBgfgMQgOASgWAYQgKALgMAKQgXAVgUALQgdAPgegEQgIgBgIgBQgpgGgagaQgGgHgFgJQgJgMgFgOQgDgHgEgGQgDACgJANQgCADgCADQgYAYgiADQgWAAgPgFQgJgDgJgHQgFgHgGgHQgIgIgGgFQgCAEgCAEQgFALgJAJQgQAQgbAIQgbAHgiACQgeAAgYgCQgngEgfgXQgFgDgHgIQgMgLgRgYQgDABgEABQgKADgOAHQgPAGgPgCQg0gBg3glQgLgGgKgGQgjgYgkgqQgLgOgKgOQgZglgTgoQgZgxgGgxg");
	this.shape_24.setTransform(-2.2,27.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F6C070").ss(2,1,1).p("AqkGXQgEgjAJgfQAOhIAqg/QAUgVAQgWQAFgEAKgKQAEgSABgQQABgdACgYQAChTAOhMQAMhHAVhFQALglANglQAph0A9hvQBgivB3hNQBfhABpACQC7AFCODHQAtA9AnBNQAjBKAaBKQAFARAGARQAFARAGASQACAHABAIQAFASAEARQAOAqASAsQAbBKAQBIQAFAQADATQACAMABAMQAAAJABAIQAAAOAAANQAAAOgBANQgBAggBAYQAHALAGAKQAFAJAFAIQAHANABADQAEANAGAaQAEAUACAUQAIAdgGAaQAAAcgFAeQgDAQgEAPQgKAsgTAwQgKAZgMAYQgKATgMARQgaAoggAcQgCACgCACQguAngrALQgEAAgEAAQghgCgggPQgMATgXAaQgJALgMAMQgXAVgVAMQgeASgeAAQgIAAgIAAQgtgEgWgfQgGgIgEgKQgHgQgDgSQgCgJgCgJQgCACgKAPQgBADgCADQgYAXglADQgXABgOgFQgKgCgIgHQgGgIgGgGQgIgIgGgFQgBAFgCAFQgDAQgIALQgOAUgbAKQgbAJglAAQgegBgYgFQgpgKgegcQgEgEgHgKQgLgNgPgbQgEACgEABQgKAFgOAJQgQAKgOgBQg0AEg5gtQgKgIgKgIQgjgegggvQgJgPgJgQQgWgpgQgsQgTg0gEg0gABcofQgBhQAlgdQAngdA3AnQA4AoApBWQApBUACBRQABA/gngyQhKhdgXgPQgWgQhIgMQgngFgChAg");
	this.shape_25.setTransform(-0.7,12.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F6C070").ss(2,1,1).p("Amdo+QChlpDxAAIABAAQDwAACnFpQB5EaAZElIADAqIABAcIACAbIADA7QAKAMAJALIAPATQAJANACACQAIAPALAdQAgBZgBBcQgDBfgnBgQgfBLguA2QgtAzgrANQglAAglgVQgPAfgoAqQg+A+g8gBQg7gBgQg5QgFgTAAgWIgCgWQgCACgNAWQgWAXgpADQgnACgRgOQgPgTgLgJIgCANQgBAUgHAOQgYAxhRgEQhRgFgug2QgJgKgZg0QgNAHgTAQQgRAMgPABQgzAJg6g1Qg6g2gnhYQgrhjgEhpQgEh3AxhlQAMgRAWggQAEgFAKgLQAAg5ADgrQABiZAgiYQAiilBGihg");
	this.shape_26.setTransform(1.2,-1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F6C070").ss(2,1,1).p("AqiGKQgChPAihHQAKgZARgZQAYggAJgQQADgGAJgKQABg2AGgqQADgoAHgpQAPhlAjhkQAEgNAFgOQAwiGBLh9QBkitB/hHQBZg2BiADQDUAGCbD4QAWAiAVAmQBUCgAkClQAGAbAFAdQAKAcAIAcQAEAKACAJQAEASAFATQAFATADAUQAEAUACATQABANABAOQABANAAANQAAAcgCAdQAIALAFAKQAFAJAEAJQAGAMAAADQAEAOAFAZQAGAkAAAkQAAArgJAqQgFAWgHAVQgRAzgeAxQgCAFgDAFQgSAkgbAgQgTAYgVAUQguAsgrALQgRAAgRgEQgTgFgSgJQgWAYgjAeQgFADgEADQgKAGgKAFQgEACgEACQgLAHgNAGQgaAMgcAAQgaAAgTgKQgVgMgKgYQgIgPgDgSQgBgFgBgFQgBgEgBgFQgFAAgMARQgCACgCABQgDAEgEACQgIAIgMAEQgMAFgQACQgjADgUgLQgOgPgMgHQgCAGgCAFQgEAPgJAMQgeAnhJgFQg3gEgmgaQgPgKgPgPQgGgGgJgOQgJgLgOgTQgFACgGAEQgJAFgMAJQgPAJgOABQg0AIg4gtQgXgRgVgXQgigkgagwQgQgbgLgcQgchBgChCABfoSQgBhOAngcQAngcA4AmQA5AnAqBTQAqBSACBOQABA9gogwQhLhagYgQQgWgOhJgMQgpgFgCg+g");
	this.shape_27.setTransform(-0.9,-10.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F6C070").ss(2,1,1).p("ArJFbQgBhKArhBQANgVAUgXQAXgdAIgQQACgGAIgKQACgzAIgpQAGglALgnQAXhcAuhbQAGgMAGgMQA+h3BXhnQBuiMCIg2QBZgoBdAFQDRANCcDVQAYAfAVAjQBfCUAiCbQAGAaAEAcQAPAXALAYQAGAJACAHQAGANAHASQAIATAFASQAFASADASQACANABANQABANAAANQgBAbgFAbQADAKACALQACAIACAJQADAKgBADQgBANgBAWQgCAfgJAfQgKAkgQAiQgJARgLARQgaAmgjAiQgDAFgDAEQgTAfgfAcQgVAUgWARQgtAkgsAIQgQABgRgDQgSgEgSgHQgcARggASQgEACgDABQgKACgHABQgEAAgDAAQgIAGgPAHQgYALgcABQgYABgUgIQgWgJgMgSQgLgLgFgPQgCgEgCgEQgCgEgCgEQgGgBgMAMQgCABgCABQgCADgDADQgHAIgMAGQgLAFgNACQghAEgWgHQgPgLgNgFQgDAEgCAEQgHALgLAJQgkAdhBgFQg2gFglgXQgNgIgQgQQgGgFgJgNQgLgHgQgNQgFACgFADQgKAFgLAHQgPAHgNABQgzAHg3glQgXgOgWgTQglgfgdgqQgSgYgNgaQgig8gChAgABvnOQgBhFAogZQApgZA8AiQA8AiAsBJQArBIADBFQABA2grgrQhOhPgZgNQgXgNhOgLQgqgEgCg2g");
	this.shape_28.setTransform(-2,-20.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F6C070").ss(2,1,1).p("Ar/EnQgBhEA1g8QAOgQAYgUQAXgcAGgOQACgHAFgJQAEgwAMgmQAIglAPgkQAehTA7hSQAHgKAIgLQBLhnBjhSQB3hsCRgkQBXgbBaAIQDQATCbCzQAZAcAXAeQBqCKAgCRQAFAZAEAaQASATAPARQAJAIABAFQAIANAKAQQAKARAHARQAHARAEARQADAMABAMQABANgBAMQgCAZgJAaQABAKgCAKQgBAIgCAIQABAJgDADQgFANgGASQgLAbgRAZQgUAegYAZQgNAOgOALQgjAagoATQgDAEgEAEQgUAZgkAYQgWARgXANQguAcgrAHQgQAAgQgCQgTgCgQgFQgjAJgbAGQgEABgDAAQgJgCgFgEQgCgBgDgCQgGAEgRAJQgWAJgcACQgWABgVgEQgWgGgOgNQgOgIgIgKQgDgDgCgDQgDgDgCgEQgJgCgLAGQgCABgCAAQgCAEgDADQgDAJgLAFQgKAGgPADQgdAFgZgEQgOgHgOgDQgEADgEACQgJAIgNAGQgqATg5gGQg0gGgjgUQgMgHgSgPQgHgGgJgKQgLgEgRgGQgFABgGADQgKAEgLAFQgOAFgNABQgyAGg1gcQgYgMgXgQQgogZgfgjQgUgVgQgXQgpg5AAg8gABvmPQgCg7ArgVQArgWA/AeQA+AdAvA/QAuA+ACA8QACAugtglQhThEgagMQgYgLhRgJQgtgEgCgvg");
	this.shape_29.setTransform(-1.6,-30.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F6C070").ss(2,1,1).p("As4D0QAAg/A+g2QARgMAbgSQAWgZAEgNQACgIAEgIQAFgrAOgoQALgiATghQAmhLBGhIQAJgJAJgJQBZhYBvg8QCBhMCagSQBXgOBVAKQDNAaCcCRQAbAZAXAaQB1B/AeCGQAFAYADAYQAXANASAQQALAGABADQAKALANAOQAMAPAJAQQAIAPAFAQQAEALABAMQABAMgBAMQgDAYgMAYQgEAKgFAKQgEAIgEAHQgCAHgEAEQgKAMgMAPQgTAWgaATQgdAXggARQgRAKgSAHQgrAMguAFQgEADgEAEQgVATgoAVQgYANgYAKQgtATgsAFQgQABgPgBQgSgBgQgEQgpADgYgGQgDgBgCgCQgIgFgDgIQgCgDgBgEQgFACgSALQgUAHgcADQgUACgWgCQgXgCgQgHQgRgFgKgHQgCgBgDgCQgDgDgEgDQgKgEgLACQgCAAgCAAQgBADgCADQgEAKgLAGQgJAGgPAEQgYAGgbgBQgPgDgPgBQgFABgEACQgMAEgPACQgwAJgxgFQgygHgjgRQgKgGgTgQQgHgFgJgJQgNAAgTAAQgFACgFACQgKADgLADQgNAEgNAAQgxAFg0gUQgYgIgZgNQgqgUgigcQgWgSgSgVQgvg0AAg4gABtlPQgCgyAtgRQAtgTBBAZQBCAYAxA1QAvA1ADAyQACAngwgfQhWg6gbgJQgagKhVgHQgugEgCgng");
	this.shape_30.setTransform(-0.9,-39.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F6C070").ss(2,1,1).p("AoLkVQDbibEyAAIAAAAQE1AADaCbQCxCJAgCSQAFAWADAZQAaAIAWALQANAGABABQAMAIAPANQBgBXhjBcQgoAmg/AaQg+Aag7AGQg1AAgzgKQgUAQg3AUQhXAghTAAQhTgBgWgdQgHgJgBgMIgBgLQgCABgUAMQgeALg5ACQg4ABgYgHQgUgKgPgFIgDAHQgCAKgKAHQgjAZhwgCQhygDg+gbQgMgFgigbQgRAFgbAIQgYAGgWAAQhHAFhOgbQhNgagxgsQg2gxABgyQABg6BIgwQASgIAegPQAGgCAOgFQADgbAFgUQALhGAxhFQA0hJBhhHg");
	this.shape_31.setTransform(-0.2,-48.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F6C070").ss(2,1,1).p("ABmk5QgCguAtgRQAtgRBBAXQBCAXAxAxQAvAwADAvQACAjgwgcQhWg1gbgJQgagJhVgHQgugDgCgkgAtLDXQABhCBFg3QARgIAdgSQAWgmAFgXQAKhQAvhOQAyhUBchQQDSixElAAQEoAADQCxQCpCbAfCnQAFAZADAcQAZAKAVAMQAMAHABABQALAJAPAPQBcBjhfBpQgmArg9AeQg7Adg4AHQgzAAgwgLQgUARg1AYQhTAkhPAAQhQgBgUghQgHgLgBgNIgBgMQgCABgUANQgcANg3ACQg1ABgXgIQgTgLgPgGIgCAIQgDAMgJAIQghAchrgDQhtgCg8gfQgLgGghgeQgQAFgaAJQgXAGgVAAQhEAGhLgfQhKgdgvgyQgzg4ABg5g");
	this.shape_32.setTransform(-0.2,-42.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F6C070").ss(2,1,1).p("ABhlfQgCg0ArgSQArgTA/AZQA+AaAvA3QAuA2ACA0QACAogtggQhTg8gagJQgYgLhRgHQgtgEgCgogAslDxQABhJBCg+QAQgKAcgTQAVgsAEgaQAKhZAthYQAvhdBZhbQDIjGEYAAQEaAADIDGQChCvAdC6QAFAdADAgQAYAKATAOQANAIABABQAKAKAOARQBYBvhbB2QgkAwg6AhQg5Aig2AHQgwAAgugNQgTAUgyAaQhPAphNAAQhLgBgUglQgHgMAAgPIgBgOQgDABgSAPQgbAOg0ADQgzACgWgKQgSgMgOgGIgDAJQgCAMgJAJQggAghmgDQhogDg5gjQgLgGgfgiQgPAFgZALQgWAHgUAAQhBAGhIgiQhGghgtg5Qgxg9ABhBg");
	this.shape_33.setTransform(-0.2,-35.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F6C070").ss(2,1,1).p("ABcmFQgBg6ApgUQApgVA7AcQA8AcAsA9QAsA8ACA6QACAtgrgkQhPhCgYgLQgYgLhNgIQgqgEgDgtgAr/ELQABhRA+hEQAQgMAbgVQAUgwAEgdQAJhjArhhQAthoBVhkQC+jcEKAAQEOAAC+DcQCaDBAbDPQAFAgACAjQAXAMATAPQAMAJABACQAKAKANATQBUB7hWCDQgkA1g2AlQg2Alg0AJQgtAAgtgPQgRAWgxAdQhLAuhJgBQhIgBgTgpQgGgNgBgRIgBgPQgCABgRAQQgaAQgyADQgwACgVgLQgRgNgOgHIgCAKQgCAOgJAKQgeAjhigDQhjgEg2gmQgKgIgeglQgPAGgYALQgUAJgTAAQg+AHhEgmQhDglgrg/QgvhEABhIg");
	this.shape_34.setTransform(-0.2,-29.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F6C070").ss(2,1,1).p("ABYmrQgBg/AmgXQAngXA5AfQA5AfAqBDQApBCACA/QACAxgpgnQhLhIgXgMQgWgMhKgKQgogEgCgxgArZElQABhZA7hLQAPgMAZgXQATg1AFggQAIhtAphrQArhyBQhuQC2jxD8AAQEBAAC0DxQCSDUAbDkQAEAjACAmQAWAOASAQQALAKABACQAKALAMAVQBQCHhSCPQgiA7g0ApQgzAogxAKQgrAAgrgQQgQAYguAgQhIAyhFgBQhFgBgSgtQgFgOgBgSIgBgSQgCACgQASQgZARgwACQgtADgUgLQgRgQgMgHIgCALQgCAPgJALQgcAnhdgDQhfgFgzgqQgKgIgcgpQgOAHgXAMQgTAKgSAAQg7AHhBgqQhAgogohFQgthLABhPg");
	this.shape_35.setTransform(-0.2,-23);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F6C070").ss(2,1,1).p("AmanVQCskHDvAAIABAAQDyAACrEHQCLDnAZD4QAEAmACAqQAVAOARASQAKALABACQAJAMAMAXQBMCThOCcQggBAgxAsQgxAsguALQgpAAgogSQgQAagsAjQhEA3hBgBQhBgBgRgxQgGgQAAgTIgBgTQgCABgQAUQgXATgtACQgrADgTgMQgQgRgMgIIgCAMQgCARgIAMQgbAqhYgEQhZgEgxguQgJgJgbgsQgNAGgWAOQgSAKgRAAQg4AIg+gtQg8gsgnhLQgqhSABhWQABhhA4hRQAOgOAYgZQAEgEAMgIQACgtAEgjQAIh3Anh0QAph8BMh4g");
	this.shape_36.setTransform(-0.2,-16.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F6C070").ss(2,1,1).p("ArZEiQABgdAIgXQAJgiAaggQANgUAVgSQASgTARgUQAPgTAAgEQAEgpAEgeQACgKABgLQAGgwAMguQAPg8AYg6QATgwAZgvQAnhIAzhEQCGiwCsgrQA/gRBAACQDWAGCfC9QAbAgAYAjQBgCWAnCdQAHAcAGAeQAEAJADAJQAEAJAEAJQAGARAGARQADALAFANQACADABADQACAHABAHQAIAdADAiQASAQANAUQAIAKABAEQAHAOAHAWQAUA2gCA5QgCAhgGAgQgIAjgPAhQgMAYgQAXQgDAEgCAEQgSAVgRATQgYAYgcATQgMAIgMAHQgiAagnALQgBAAgCAAQgoADgmgMQgVAXgsAeQgCABgCABQg5AhguAAQgMAAgLgCQgIgBgFgCQgLgBgLgBQgUgDgPgLQgKgHgGgMQgGgJgEgMQgBgEgBgEQgCgIgCgIQgCABgIAHQgDAEgHAEQgEACgFACQgQAFgTADQgEABgEABQgHADgHABQgFABgFABQggAEgUgIQgQgNgOgHQgCAFgCAFQgEAOgJAKQgDADgDACQglAdhMgFQgggCgagIQgZgHgZgRQgQgHgPgKQgDgBgDgDQgIgHgNgPQgHgHgHgKQgEABgDACQgNAEgQAIQgTAHgRgBQgcACgigNQgcgKgdgVQgFgEgGgFQgagVgZgdQgXgbgRggQgWgngLgnQgNgtAAgugABim9QgBhDAmgXQAngYA5AgQA5AhAqBGQApBFACBDQABAzgogpQhLhMgXgMQgWgNhKgKQgogEgCg0g");
	this.shape_37.setTransform(-1.2,-10.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F6C070").ss(2,1,1).p("ABtmsQgBhAAogWQApgYA7AgQA8AfAtBEQArBDACBAQACAxgrgnQhPhJgYgMQgXgNhOgJQgqgEgCgzgAsCECQABgeAMgUQAKgdAkgZQANgRAagMQASgUAPgUQANgUABgEQAGgpAEgcQACgNACgJQAIgyAOgsQASg7Acg6QAXgvAcguQAthGA4g/QCQihC2gjQBAgNBBADQDaAMCiC4QAcAgAZAjQBmCWAlCfQAHAcAFAeQAGAIAFAIQAFAIAFAHQAKAMAJANQAFALAIALQACACACADQAEAGACAGQAMAcAEAhQAPASAKAWQAGALgBAEQAFAQAEAWQAKA2gKA4QgIAigIAdQgNAigSAeQgPAWgSAUQgDAEgEADQgVASgSAQQgbATgeAOQgNAGgNAEQgfAZgqAOQgCAAgBABQgoAGgngIQgaAVgsAYQgCABgCABQg/AagpgIQgLgCgJgFQgHgDgEgDQgJAAgOADQgTgCgRgHQgLgFgIgJQgHgHgGgJQgCgDgCgDQgDgHgEgGQgEAAgHAFQgEADgHADQgFABgFABQgRACgTAAQgDACgDACQgGADgHADQgEACgDABQgfAGgYgFQgQgJgQgFQgDAEgCAEQgHALgLAIQgDACgDACQgsAXhHgHQghgEgagJQgXgHgagUQgQgFgRgGQgDgBgEgCQgIgFgPgMQgIgGgIgIQgEABgDABQgOACgRAGQgTAFgRgDQgaAAgkgPQgcgLgdgVQgGgEgFgFQgZgTgdgfQgXgbgTgfQgWgmgNgoQgOguAAgvg");
	this.shape_38.setTransform(-1.8,-4.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F6C070").ss(2,1,1).p("AB0mbQgBg+AqgWQArgWA+AeQA/AeAvBCQAtBAACA9QACAwgtgmQhShGgagMQgYgMhSgJQgsgEgCgwgAsvDhQABgfAQgSQAMgWAsgUQAOgMAfgHQASgVANgUQAMgVABgEQAHgrAFgaQADgNACgKQAKgyAQgrQAVg7Ahg5QAZgtAhgtQAyhEA+g6QCYiSDBgaQBAgKBCAFQDeASCnCyQAcAgAaAiQBtCXAjCgQAGAdAFAfQAHAGAHAGQAGAFAHAFQANAKAMALQAHAIALAJQADACADACQAFAFADAGQARAaAEAiQANATAGAYQAEAKgCAHQACARAAAVQACA2gTA4QgNAigLAaQgRAhgWAbQgSAVgVARQgDADgEACQgaAPgSANQgeAOgfAJQgOAEgOACQgdAXgtASQgCAAgBABQgoAJgogDQgeATgtASQgCAAgCABQhFAUglgQQgKgFgHgHQgEgEgEgEQgHAAgQAFQgSACgTgEQgMgDgKgGQgJgFgIgHQgDgCgCgCQgGgFgFgFQgFAAgHADQgFACgIABQgEAAgGAAQgSgCgSgBQgDADAAACQgFAFgHADQgEADgFACQgbAJgbgCQgRgGgRgEQgEAEgEADQgIAIgNAGQgDACgFABQgyARhDgJQghgFgagLQgUgGgcgZQgQgCgSgDQgEAAgEgBQgJgDgRgJQgJgFgJgGQgEAAgEABQgOABgRACQgTACgRgEQgZgCgmgRQgcgLgdgVQgGgEgGgFQgYgTgfggQgYgagUgfQgYgmgNgoQgQgvAAgvg");
	this.shape_39.setTransform(-2.1,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F6C070").ss(2,1,1).p("AB2mMQgBg7AsgWQAtgVBBAdQBCAdAxA/QAwA+ACA7QABAuguglQhWhDgbgMQgagLhVgJQgvgEgCgugAtgC/QAAggAUgPQAOgRA1gOQAPgIAkgBQARgXALgTQALgWABgEQAIgqAGgcQAEgNACgJQAMgzASgrQAZg5Alg5QAcgsAkgrQA5hCBCg1QChiEDMgRQBBgHBDAHQDiAYCqCtQAeAfAaAiQB1CYAgChQAGAdAEAeQAIAFAJAFQAHAFAKADQAPAHAQAHQAIAGAOAHQAFACADACQAGAEAEAFQAWAYAFAiQAKAVACAZQACALgDAIQgBATgDAVQgHA1gcA4QgSAigNAXQgWAggZAYQgVATgYAOQgEACgEADQgeALgTAKQghAJghAEQgPABgPAAQgZAXgxAUQgBABgCAAQgoANgoACQgkARgsALQgDABgCAAQhLANgggYQgJgHgFgKQgDgFgDgFQgFAAgRAJQgTAEgVAAQgNgBgLgEQgLgCgKgFQgEgBgDgCQgHgDgHgEQgFAAgIACQgFAAgJAAQgFgBgGAAQgRgGgRgDQgCADgCADQgEAGgGAEQgEAEgFACQgYAMgeABQgRgDgUgBQgEACgFACQgLAGgNAEQgFABgFABQg5AKg+gKQghgHgagMQgRgGgfgcQgQgBgUABQgDABgEgBQgKAAgTgGQgLgEgJgFQgFAAgEAAQgPAAgQAAQgUgBgSgGQgWgEgogTQgdgMgdgVQgGgEgGgEQgXgSghgiQgagagUgeQgaglgPgpQgQgvAAgwg");
	this.shape_40.setTransform(-1.9,7.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F6C070").ss(2,1,1).p("AB2l+QgBg5AugUQAvgVBEAcQBFAcAzA8QAyA8ACA4QACAtgxgjQhahBgcgLQgbgLhZgJQgxgDgCgtgAuUCcQAAgiAYgMQAPgLA/gIQAPgEApAFQARgYAJgTQAJgYABgEQALgqAGgbQAEgOACgIQAPg1AUgpQAcg4Apg4QAggrAogqQA+hABHgxQCrh1DVgIQBEgEBCAJQDnAeCtCnQAfAgAbAhQB7CZAeCiQAGAcADAgQAKAEALAEQAIADALABQATAEATADQAJAEASAFQAFABAFACQAHADAFAEQAaAXAGAiQAIAWgDAcQAAALgDAJQgEAUgGAVQgQA1glA3QgYAjgPAVQgaAfgdAVQgYARgaAKQgEACgFACQgjAJgUAGQgjAFgjgCQgPgBgQgCQgXAVg0AYQgCAAgBABQgpAQgoAGQgoAPgtAGQgDAAgCAAQhRAGgbgfQgIgKgDgMQgCgHgCgGQgEABgTAMQgRAGgYADQgOACgMgBQgNAAgMgCQgFgBgEgBQgJgBgIgDQgHAAgHgBQgGAAgIgCQgEgBgHgCQgUgJgRgFQgBAEgCAEQgCAGgGAFQgDAFgFADQgVAOghAEQgSABgVAAQgGABgGACQgMADgQACQgEAAgGAAQhBAFg5gNQghgIgagNQgPgGghggQgPACgVAFQgEAAgFABQgKACgVgEQgMgCgKgDQgFgBgEAAQgQgCgRgDQgUgDgRgIQgVgGgqgVQgdgMgegVQgGgEgGgFQgVgQglgjQgbgagVgdQgbglgPgpQgSgxAAgwg");
	this.shape_41.setTransform(-1.4,13.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F6C070").ss(2,1,1).p("AB1lxQgBg2AwgUQAxgTBHAaQBIAbA1A6QA0A5ACA2QACArgzgiQheg+gdgLQgcgKhdgIQgzgEgCgrgAvJB4QAAgjAbgJQASgGBHgCQARAAA0ANQAVg4AFgTQAThHAHgVQARg1AWgoQA2hiBlhfQDkjQE+AAQFDAADiDQQC4C3AhDEQAGAeADAiQALACAMACQAKACANAAIAsAAQALACAVACQARADAIAFQA8AogdBbQgXBIhABNQgeAjgRASQgfAeggASQgfASgiAHQgnAGgVADQg3AAg1gOQgUAUg6AcQhaArhXAAQhXgBgWgoQgHgMgBgPIgCgPQgCABgVAPQgRAJgaAHQgeAHgbABQgaABgSgFQgKgCgTgIQgVgNgQgGIgCAJQgDANgLAKQgkAhh0gDQh3gDhBglQgMgGgjgkQgSAGgdAKQgLAEgXgBQgUgBgNgDQgogJgggPQgSgJgtgXQgjgPgkgbQgUgQgogkQhCg8gdhIQgUgyABgwg");
	this.shape_42.setTransform(-0.9,20.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F6C070").ss(2,1,1).p("AB2l3QgCg4AvgUQAwgUBEAbQBGAbAzA8QAzA6ACA3QACAsgxgjQhbg/gcgLQgcgKhagJQgxgDgCgsgAuiCRQABgiAYgMQAQgJBBgGQAOgEAnAHQAVgXAIgRQAFgLADgJQANgyAGgZQAFgRADgKQAPg0AVgpQAagzAmgzQAjgvAtguQA7g5BBgsQCyh4DhgGQA/gCA/AIQDsAeCwCnQAgAgAbAiQB9CXAdChQAGAcADAhQAKADALADQAJADAMABQATACAUADQAJADATAEQAQAEAHAGQAWASAIAaQAKAWgCAdQAAAKgCAKQgBAGgBAHQgDAOgFAOQgSA6gsA+QgaAigQAUQgbAfgeAUQgQALgSAIQgNAGgOAEQgkAHgUAGQgbACgbgCQgZgBgYgEQgTARgpAUQgJAEgKAEQghAOghAHQgqAQgtAFQgJABgJABQhTAEgZgiQgGgIgDgJQgBgDgBgEQgBgHgCgHQgDABgTANQgSAHgYAEQgKACgKAAQgRAAgPgBQgMgBgIgCQgLAAgLgBQgDAAgDgBQgGgCgOgEQgUgKgRgGQgBAEgCAEQgBAEgCADQgFAHgHAGQgSAOgeAFQgSACgXABQgFABgGABQgNADgRABQgHABgIAAQhAACg2gMQgkgJgcgOQgNgGgighQgQADgWAGQgDABgEABQgLACgWgDQgMgBgKgDQgFgBgEAAQgRgDgRgEQgTgEgRgHQgCgBgBgBQgVgHgngTQgfgNghgYQgDgCgEgDQgUgQgmgjQgegcgWggQgZgigPglQgTgyAAgvg");
	this.shape_43.setTransform(-1.3,26);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F6C070").ss(2,1,1).p("AB2l/QgCg5AtgUQAugVBDAcQBDAcAyA9QAxA7ACA5QACAtgwgkQhYhBgbgLQgbgLhXgIQgvgEgCgtgAt7CoQABghAVgNQAPgOA6gKQAOgGAjACQAVgVAKgSQAEgKAFgIQALgxAGgaQAEgRADgKQAOgzATgqQAYgzAjgzQAhgwAqgvQA3g6A9guQCriCDZgLQA+gEA+AHQDpAZCtCqQAfAgAbAhQB4CWAeCfQAGAcAEAfQAJAFAKAEQAIAEAKACQASAFARAFQAIAFAQAFQAOAFAGAHQATATAIAaQALAVABAbQACAKgCAJQgBAGAAAGQgCAOgDAOQgLA6glA9QgWAigOAWQgYAfgcAWQgPAMgRAJQgMAHgMAFQghAKgUAHQgaAFgaABQgXABgYgCQgUASgnASQgJADgKAEQghALghAEQgmARgtAKQgJABgIABQhOAIgegcQgGgHgEgIQgBgCgBgDQgCgGgDgGQgEABgSAKQgSAFgWABQgKAAgJgBQgPgBgNgEQgKgDgHgCQgKgBgLACQgDAAgCAAQgJgBgLgDQgUgIgRgEQgCADgBAEQgCADgCADQgGAGgHAFQgUALgcAEQgSgBgVAAQgEACgGABQgLAFgPADQgHABgIABQg7AGg5gLQgkgIgbgNQgQgGgggeQgQACgVADQgDAAgDAAQgKABgVgFQgLgCgKgEQgFAAgDgBQgRgBgRgCQgTgDgQgFQgCgBgCgBQgVgGglgRQgggMgggYQgDgCgEgDQgWgQgjgiQgdgcgWggQgYgigOglQgSgxAAgvg");
	this.shape_44.setTransform(-1.6,32);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F6C070").ss(2,1,1).p("AB1mGQgBg6AsgVQAsgVBAAdQBCAcAwA+QAvA9ACA6QACAtgugkQhWhCgagLQgagLhUgJQgugEgCgugAtUDAQAAggATgPQAOgSAzgOQANgJAggBQAVgWALgRQAEgJAGgJQAKgwAGgaQADgQADgLQAMgyARgqQAXg0AggzQAegxAogvQAyg7A7gxQCkiLDRgRQA8gGA+AGQDlAVCqCsQAeAfAaAiQBzCUAhCeQAGAdAEAdQAIAFAJAFQAGAFAKAEQAPAHAOAIQAHAGAOAHQAMAGAFAIQARAUAGAZQANAUAEAaQADAKgCAHQABAGAAAGQgBANgBAOQgEA6geA9QgSAigNAXQgVAggZAYQgOANgPAKQgLAIgMAGQgeAMgTAKQgYAHgZADQgXAEgXAAQgVASgmAQQgJACgJADQghAJghACQgiASgtANQgIACgJACQhJANghgXQgHgGgEgGQgCgCgCgDQgCgFgEgFQgFAAgRAIQgSADgUgBQgJgBgIgDQgOgEgLgGQgJgEgFgDQgJAAgLADQgDABgCAAQgJAAgMgCQgRgFgSgDQgCADgCADQgCACgDADQgGAFgHAEQgWAKgaABQgRgDgUgCQgEADgEACQgKAGgOAFQgHACgHABQg2AKg8gJQgkgHgbgNQgSgGgegbQgQAAgTABQgDAAgEAAQgJgBgTgHQgLgDgJgFQgEAAgEAAQgQgBgRAAQgSAAgQgFQgCgBgCAAQgWgEgkgQQgfgMghgXQgDgCgDgDQgXgRghggQgcgcgWghQgXgigNgkQgSgwABgvg");
	this.shape_45.setTransform(-1.9,37.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F6C070").ss(2,1,1).p("ABymOQgBg7AqgVQArgWA/AdQA/AdAuA/QAuA/ACA7QABAugsgkQhThEgZgMQgZgLhRgJQgtgEgCgvgAswDXQAAgfAQgRQANgWAtgSQAMgMAdgFQAVgVAMgSQAEgHAHgJQAJgxAFgZQADgPACgLQALgyAQgqQAUg0Aeg0QAcgxAkgwQAvg8A3g0QCdiUDJgXQA7gIA+AFQDgARCoCuQAdAfAaAhQBtCTAjCcQAHAdAEAeQAHAGAHAFQAGAGAIAFQAMAKANAKQAGAHALAIQAKAHAEAJQAOAVAFAaQAPASAGAYQAEALgBAGQABAFABAGQABAMABAOQADA6gXA9QgOAhgLAaQgSAfgXAbQgNANgOANQgKAIgLAHQgbAOgTAMQgWAJgYAHQgWAGgWACQgXASgkAOQgJACgJACQghAHgggCQgfATgsASQgIACgIADQhFARglgSQgHgEgGgFQgCgCgBgCQgEgEgEgEQgHAAgPAGQgSABgSgEQgJgDgIgFQgLgFgKgIQgGgFgFgFQgHAAgMAGQgCABgDAAQgIABgLAAQgTgDgQgCQgDACgCADQgDACgCACQgHAEgIAEQgYAHgXgBQgRgFgSgDQgEADgDADQgJAIgNAGQgGADgGACQgyANg/gIQgjgGgbgLQgUgGgdgYQgPgCgSgCQgDAAgEgBQgJgCgRgJQgKgFgIgGQgEABgEAAQgPABgRACQgSABgQgDQgCgBgCAAQgXgDgigPQgfgLgggWQgEgDgDgCQgYgSgfgfQgbgcgVggQgWgigNgkQgRgwABgug");
	this.shape_46.setTransform(-1.9,44);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F6C070").ss(2,1,1).p("AsODtQAAgeAOgTQALgaAmgWQAMgOAagJQAUgVAOgRQAEgHAIgIQAHgxAFgZQADgPACgMQAJgwAOgrQASg1AbgzQAagyAhgxQArg9A0g3QCWidDAgcQA7gKA9ADQDdANClCwQAbAfAaAiQBoCRAlCaQAHAcAFAeQAGAHAFAIQAFAGAGAHQALAKAKANQAFAJAIAJQAIAIAEAKQAKAWAFAaQAQARAJAWQAGALgBAEQACAGACAGQACALACAOQAKA6gQA8QgJAhgKAbQgPAhgVAcQgLAPgNANQgJAJgKAJQgYAQgSAOQgVALgXAJQgVAJgVAEQgZASgiAMQgJACgJABQghAEgggEQgbAVgsAVQgIADgHADQhBAWgngMQgIgDgHgEQgCgBgCgCQgFgDgEgEQgJAAgNADQgTgBgQgGQgJgEgGgGQgKgIgHgKQgFgHgEgGQgGABgMAIQgCABgCABQgIACgLAAQgRAAgUgBQgCACgDACQgDACgDABQgFAEgIACQgaAGgWgDQgQgIgRgEQgDADgDAEQgHAKgLAHQgGAEgGACQgtAShCgHQgigFgcgKQgVgGgcgVQgPgEgRgEQgCgBgEgBQgIgEgQgLQgJgFgIgIQgEABgDABQgOABgRAFQgSADgQgDQgCAAgBAAQgZgBghgNQgfgLgfgWQgEgCgDgDQgYgSgdgeQgbgcgUghQgWgigMgjQgQgvABgugABtmXQgBg8ApgWQAqgWA8AeQA8AeAtBAQAsBAACA8QACAwgrgmQhQhFgYgMQgYgLhPgJQgrgFgCgwg");
	this.shape_47.setTransform(-1.8,50.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F6C070").ss(2,1,1).p("AruEDQABgdAKgVQAKgeAfgaQAMgRAWgNQAVgUAPgSQAEgFAJgIQAGgwAEgaQACgOACgMQAIgwANgsQAPg0AYg0QAYgzAegyQAog9Awg5QCPinC4giQA7gMA7ACQDZAJCiCyQAbAfAZAhQBkCQAmCZQAHAcAFAcQAFAJAFAIQAEAIAEAIQAJAOAHANQAEALAGAKQAGAKACALQAIAWAEAaQARAQAMAVQAIAKAAAEQACAFACAGQAEALAEANQARA6gJA8QgGAhgIAdQgMAggSAfQgKAPgMAPQgIAKgJAKQgVASgSAQQgTAOgWALQgUALgUAHQgbASggAKQgJABgJABQggACgggIQgXAWgsAaQgIADgGADQg9AbgrgHQgJgBgHgDQgDgBgCgBQgGgCgFgDQgJAAgMABQgTgDgPgJQgIgGgFgIQgJgJgFgMQgDgJgDgHQgEABgMAKQgCABgCACQgIADgKACQgRACgUAAQgDABgDACQgEABgDABQgIADgGABQgcAEgTgFQgQgLgPgFQgCAFgDAEQgFAMgKAIQgFAEgGAEQgoAVhGgGQgigDgbgJQgYgHgZgSQgQgFgPgHQgCgBgDgCQgIgFgPgNQgHgHgIgIQgEABgDABQgOADgRAGQgRAFgQgBQgCAAgBgBQgaABgfgMQgfgJgfgXQgDgCgEgCQgZgTgbgcQgagcgUgiQgUghgMgjQgOguAAgugABnmgQgCg9AogWQAogXA6AfQA6AeArBCQArBAACA+QABAxgpgnQhNhGgYgNQgXgLhLgJQgpgFgCgxg");
	this.shape_48.setTransform(-1.4,56.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F6C070").ss(2,1,1).p("ArQEYQABgcAHgXQAJgiAZgfQALgTATgRQAUgTARgSQAEgFAKgIQAFgvAEgcQABgMACgMQAGgvALgsQAOg1AVg0QAVg0AcgyQAjg/Atg7QCIiwCwgoQA6gOA6ABQDWAFCfC0QAaAeAYAiQBfCPAoCWQAHAcAGAbQAEAKADAJQADAJADAKQAGARAFARQADAKAEAMQADALACALQAFAYADAaQATAPAOASQAJALABACQADAFADAGQAEAKAGANQAZA6gDA8QgBAggHAfQgJAhgQAgQgIARgLAQQgHALgIALQgSAUgRASQgSARgVAOQgTANgUAJQgbASgfAIQgJAAgJAAQggAAgfgKQgUAXgsAdQgHAEgGAEQg4AfgvgBQgJAAgIgCQgEAAgCAAQgGgCgGgCQgLgBgLgBQgSgFgNgLQgIgIgEgJQgHgLgDgPQgCgKgCgIQgDABgMAMQgCACgCACQgHAEgKADQgQAEgUACQgEABgEABQgDABgEAAQgIACgIABQgcABgRgHQgQgNgOgGQgBAFgCAFQgEANgJAKQgEAFgGAEQgjAZhIgEQgigDgbgIQgagGgYgQQgPgGgOgJQgCgCgDgDQgIgGgNgPQgGgIgIgJQgDABgEABQgMAEgRAIQgRAHgPAAQgCAAgCAAQgaACgegKQgfgJgfgWQgDgCgDgCQgbgTgZgcQgYgbgUgiQgTgigLgjQgOgsAAgugABemqQgBg+AmgXQAmgXA4AfQA4AfAqBDQAoBCACA/QACAxgogmQhKhIgXgNQgWgMhJgJQgngFgCgyg");
	this.shape_49.setTransform(-0.9,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleX:1.034,scaleY:1.992,skewX:-21,skewY:-28.4,y:30.6,x:20.9}}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape,p:{scaleX:0.995,scaleY:1.678,skewX:-25.2,skewY:-23.8,y:50.9,x:20.9}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15},{t:this.shape,p:{scaleX:1.094,scaleY:1.443,skewX:-34.7,skewY:-16.7,y:73.5,x:24}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19},{t:this.shape,p:{scaleX:1.174,scaleY:1.436,skewX:-38.3,skewY:-14.7,y:79,x:26}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26},{t:this.shape,p:{scaleX:1.129,scaleY:2.63,skewX:-15.7,skewY:-36.3,y:-53.4,x:20.9}}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31},{t:this.shape,p:{scaleX:1.2,scaleY:1.482,skewX:-37.8,skewY:-14.9,y:-72.8,x:26.7}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape,p:{scaleX:1.05,scaleY:2.106,skewX:-19.8,skewY:-29.9,y:-57.4,x:20.9}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,-1,140.6,139.7);


(lib.tentacule_gauche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tentacule_calque
	this.instance = new lib.tentacule_cote("synched",18);
	this.instance.setTransform(46.1,78,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({startPosition:17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-1.5,95.1,81.5);


(lib.soie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// soie_calque
	this.instance = new lib.soie_cote("synched",0);
	this.instance.setTransform(19.5,33.9,1,0.642,0,-0.3,179.7,-8.1,40.6);

	this.instance_1 = new lib.soie_cote("synched",0);
	this.instance_1.setTransform(-18.6,34.5,1,0.656,-6,0,0,-8,40.6);

	this.instance_2 = new lib.soie_milieu("synched",0);
	this.instance_2.setTransform(0.5,39.7,1,1,0,0,0,0.3,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-1,56.5,81.5);


(lib.A_meduse_compilation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tentacule_milieu_calque
	this.instance = new lib.tentacule_milieu("synched",0);
	this.instance.setTransform(-19.9,167.8,1,1,0,0,0,3.6,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:168.5,startPosition:7},7).to({x:-20.8,y:167.2,startPosition:11},4).to({x:-22.2,y:166.3,startPosition:14},3).to({x:-20.4,y:166,startPosition:18},4).to({x:-27.3,y:156.3,startPosition:20},2).to({x:-20.6,y:147,startPosition:21},1).to({x:-19,y:140.9,startPosition:22},1).to({x:-20.8,y:129.9,startPosition:24},2).to({x:-18,y:121.2,startPosition:25},1).to({x:-20,y:103.2,startPosition:26},1).to({x:-19.9,y:63.1,startPosition:28},2).to({x:-19.8,y:46.5,startPosition:29},1).to({y:28,startPosition:30},1).to({x:-19.6,y:73.3,startPosition:34},4).to({y:86.1,startPosition:35},1).to({x:-19.5,y:89.6,startPosition:36},1).to({y:96.5,startPosition:38},2).to({y:109.7,startPosition:41},3).to({y:145.8,startPosition:46},5).to({x:-19.9,y:167.8,startPosition:0},3).wait(1));

	// tentacule_droite_calque
	this.instance_1 = new lib.tentacule_gauche("synched",32);
	this.instance_1.setTransform(110.4,159,1,1,0,0,180,-12,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:159.9,startPosition:35},3).to({x:111.3,y:162.3,startPosition:39},4).to({x:120.2,y:158,startPosition:43},4).to({x:124.5,y:157.2,startPosition:44},1).to({x:133,y:162.9,startPosition:46},2).to({x:142.9,y:161.6,startPosition:0},4).to({x:138.3,y:130.1,startPosition:2},2).to({x:129.5,y:121,startPosition:3},1).to({x:120.7,y:119,startPosition:4},1).to({x:110.4,y:114.5,startPosition:6},2).to({x:109.2,y:110.1,startPosition:7},1).to({x:105.5,y:92.9,startPosition:8},1).to({regX:-12.1,skewX:2,skewY:182,x:107.5,y:56.1,startPosition:10},2).to({regY:109.4,skewX:3.7,skewY:183.7,x:114.5,y:37.2,startPosition:11},1).to({regX:-12,regY:109.5,skewX:4,skewY:184,x:116.2,y:24.9,startPosition:12},1).to({skewX:3.7,skewY:183.7,x:108.4,y:70.3,startPosition:16},4).to({skewX:0,skewY:180,x:107.4,y:78,startPosition:17},1).to({x:106.7,y:82.5,startPosition:18},1).to({x:114.8,y:88.5,startPosition:20},2).to({x:119.4,y:102.4,startPosition:23},3).to({x:112.6,y:136.6,startPosition:28},5).to({x:108.6,y:160.5,startPosition:31},3).wait(1));

	// tentacule_gauche_calque
	this.instance_2 = new lib.tentacule_cote("synched",0);
	this.instance_2.setTransform(-47.5,129.9,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-47.3,y:130.5,startPosition:3},3).to({y:131.4,startPosition:7},4).to({x:-59.7,y:129.5,startPosition:11},4).to({x:-66.7,y:129.1,startPosition:14},3).to({x:-76.3,y:130.1,startPosition:18},4).to({x:-66.9,y:114.3,startPosition:20},2).to({x:-44.2,y:89.4,startPosition:24},4).to({x:-43.6,y:82.8,startPosition:25},1).to({x:-45.2,y:64.5,startPosition:26},1).to({rotation:-16.5,x:-57.6,y:-9.7,startPosition:30},4).to({rotation:-13.4,x:-48.3,y:36.8,startPosition:34},4).to({rotation:-13.5,x:-46.3,y:48.8,startPosition:35},1).to({regY:0,rotation:-13,x:-47.1,y:51.6,startPosition:36},1).to({regX:0,rotation:-7.8,x:-59.2,y:71.4,startPosition:41},5).to({regX:0.1,regY:-0.1,rotation:0,x:-48.3,y:129.5,startPosition:0},8).wait(1));

	// soie_calque
	this.instance_3 = new lib.soie("synched",0);
	this.instance_3.setTransform(1.2,188,1,1,0,0,0,0.1,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:18},18).to({y:176.3,startPosition:20},2).to({y:150.3,startPosition:24},4).to({y:144.4,startPosition:25},1).to({y:124.9,startPosition:26},1).to({y:45.6,startPosition:30},4).to({y:95.7,startPosition:34},4).to({y:106.1,startPosition:35},1).to({y:111.3,startPosition:36},1).to({y:188,startPosition:0},13).wait(1));

	// chapeau_calque
	this.instance_4 = new lib.chapeau("synched",0);
	this.instance_4.setTransform(-0.1,81.2,1,1,0,0,0,0.7,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({startPosition:49},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.3,-1,247.4,231.2);


// stage content:



(lib.meduse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// meduse_calque
	this.instance = new lib.A_meduse_compilation("synched",0);
	this.instance.setTransform(274.4,230.2,1,1,0,0,0,-0.1,132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:267.3,startPosition:7},7).to({y:325.6,startPosition:18},11).to({y:243.4,startPosition:30},12).to({y:229.2,startPosition:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(428.2,296.4,247.4,231.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;