import {Flower1} from "./flower1";
import {Flower2} from "./flower2";
import {Renderer} from "./renderer";

var f1 = new Flower1();
var result = f1.generate();

var renderer = new Renderer();
var grid = renderer.renderGrid(f1.headers, f1.rowLabels, result, f1.title);
$("#gridholder").html(grid);

var f2 = new Flower2();
var result2 = f2.generate();

grid = renderer.renderGrid(f2.headers, f2.rowLabels, result2, f2.title);
$("#gridholder").html(grid);