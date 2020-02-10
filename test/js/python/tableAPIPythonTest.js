/*
 *  Copyright 2018 TWO SIGMA OPEN SOURCE, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var tableAPIBaseObject = require('../tableAPIBase.js').prototype;
var BeakerXPageObject = require('../beakerx.po.js');
var beakerxPO;

describe('(Python) Testing of table ', function () {

  tableAPIBaseObject.constructor.apply(this, ['Python']);

  beforeAll(function () {
    beakerxPO = new BeakerXPageObject();
    beakerxPO.runNotebookByUrl('/test/ipynb/python/TableAPIPythonTest.ipynb');
  }, 2);

  afterAll(function () {
    beakerxPO.closeAndHaltNotebook();
  });

  var cellIndex;
  var imageDir = 'python/tableAPI';

  describe("(Python) Data types for TableDisplay", function(){

    it('Can use Array of Integers parameter', function () {
      cellIndex = 43;
      var width = 120, height = 92;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell40_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell40_case1.png');
    });

    it('Table have index column menu. ', function () {
      var tblDisplay = beakerxPO.getTableDisplayByIndex(cellIndex);
      expect(beakerxPO.getTableIndexMenu(tblDisplay)).not.toBe(null);
    });

    it('Can use 2D Array of Integers parameter', function () {
      cellIndex += 2;
      var width = 124, height = 67;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell41_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell41_case1.png');
    });

    it('Can use Array of Decimals parameter', function () {
      cellIndex += 2;
      var width = 125, height = 92;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell42_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell42_case1.png');
    });

    it('Can use 2D Array of Decimals parameter', function () {
      cellIndex += 2;
      var width = 130, height = 67;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell43_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell43_case1.png');
    });

    it('Can use Array of Strings parameter', function () {
      cellIndex += 2;
      var width = 144, height = 92;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell44_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell44_case1.png');
    });

    it('Can use 2D Array of Strings parameter', function () {
      cellIndex += 2;
      var width = 110, height = 68;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell45_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell45_case1.png');
    });

    it('Can use Array of Integer Arrays parameter', function () {
      cellIndex += 2;
      var width = 130, height = 92;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell46_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell46_case1.png');
    });

    it('Can use 2D Array of Integer Arrays parameter', function () {
      cellIndex += 2;
      var width = 180, height = 68;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell47_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell47_case1.png');
    });

    it('Can use 2D Array of Integer,Decimal,String,Array Arrays parameter', function () {
      cellIndex += 2;
      var width = 164, height = 116;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell48_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell48_case1.png');
    });

    it('Can use [Integer,Decimal,String,Array] parameter', function () {
      cellIndex += 2;
      var width = 129, height = 116;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell49_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell49_case1.png');
    });

    it('Can use 2D Arrays of [Integer,Decimal,String,Array] parameter', function () {
      cellIndex += 2;
      var width = 252, height = 67;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell50_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell50_case1.png');
    });

    it('Can use numbers as name of Array keys (Array parameter)', function () {
      cellIndex += 2;
      var width = 156, height = 116;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell51_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell51_case1.png');
    });

    it('Can use numbers as name of Array keys (2D Array parameter)', function () {
      cellIndex += 2;
      var width = 256, height = 67;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell52_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell52_case1.png');
    });
  });

  describe("(Python) TableDisplay(pandas DataFrame)", function() {
    it('TableDisplay should display table from pandas dataFrame', function () {
      cellIndex += 2;
      var width = 100, height = 67;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell53_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell53_case1.png');
    });

    it('Table have index column menu', function () {
      var tblDisplay = beakerxPO.getTableDisplayByIndex(cellIndex);
      expect(beakerxPO.getTableIndexMenu(tblDisplay)).not.toBe(null);
    });

  });

  describe("(Python) Use index in pandas DataFrame. ", function() {
    it('Table have index column menu. ', function () {
      cellIndex += 2;
      beakerxPO.runCodeCellByIndex(cellIndex);
      var tblDisplay = beakerxPO.getTableDisplayByIndex(cellIndex);
      expect(beakerxPO.getTableIndexMenu(tblDisplay)).not.toBe(null);
    });
  });

  describe("(Python) Pandas read csv with index_col parameter. ", function() {
    it('Should display table. ', function () {
      cellIndex += 1;
      var width = 70, height = 44;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell54_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell54_case1.png');
    });
  });

  describe('(Python) Pandas read csv ', function(){
    it('Should display table ', function() {
      cellIndex += 2;
      var width = 646, height = 92;
      var canvas = beakerxPO.runCellToGetCanvas(cellIndex);
      var imageData = beakerxPO.getCanvasImageData(canvas, width, height);
      beakerxPO.checkImageData(imageData, imageDir, 'cell55_case1.png');
      // beakerxPO.createTableImage(imageData, imageDir, 'cell55_case1.png');
    });
  });

});
