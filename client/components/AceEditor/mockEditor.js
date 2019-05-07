var ace = require('brace'),
    Mock = require('mockjs');
require('brace/mode/javascript');
require('brace/mode/json');
require('brace/mode/xml');
require('brace/mode/html');
require('brace/theme/xcode');
require('brace/ext/language_tools.js');
var json5 = require('json5');
const MockExtra = require('common/mock-extra.js');

var langTools = ace.acequire('ace/ext/language_tools'),
    wordList = [
        { name: 'string', mock: '@string' },
        { name: 'natural number', mock: '@natural' },
        { name: 'float', mock: '@float' },
        { name: 'character', mock: '@character' },
        { name: 'boolean', mock: '@boolean' },
        { name: 'url', mock: '@url' },
        { name: 'domain', mock: '@domain' },
        { name: 'ip address', mock: '@ip' },
        { name: 'id', mock: '@id' },
        { name: 'guid', mock: '@guid' },
        { name: 'current time', mock: '@now' },
        { name: 'timestamp', mock: '@timestamp' },
        { name: 'date', mock: '@date' },
        { name: 'time', mock: '@time' },
        { name: 'datetime', mock: '@datetime' },
        { name: 'image link', mock: '@image' },
        { name: 'image data', mock: '@imageData' },
        { name: 'color', mock: '@color' },
        { name: 'color hex', mock: '@hex' },
        { name: 'color rgba', mock: '@rgba' },
        { name: 'colr rgb', mock: '@rgb' },
        { name: 'color hsl', mock: '@hsl' },
        { name: 'integer', mock: '@integer' },
        { name: 'email', mock: '@email' },
        { name: 'paragraph', mock: '@paragraph' },
        { name: 'sentence', mock: '@sentence' },
        { name: 'word', mock: '@word' },
        { name: 'big chinese paragraph', mock: '@cparagraph' },
        { name: 'title in chinese', mock: '@ctitle' },
        { name: 'title', mock: '@title' },
        { name: 'name', mock: '@name' },
        { name: 'chinese name', mock: '@cname' },
        { name: 'chinese first name', mock: '@cfirst' },
        { name: 'chinese last name', mock: '@clast' },
        { name: 'english first name', mock: '@first' },
        { name: 'english last name', mock: '@last' },
        { name: 'sentence in chinese', mock: '@csentence' },
        { name: 'words in chinese', mock: '@cword' },
        { name: 'region', mock: '@region' },
        { name: 'province', mock: '@province' },
        { name: 'city', mock: '@city' },
        { name: 'contry', mock: '@county' },
        { name: 'upper', mock: '@upper' },
        { name: 'lower', mock: '@lower' },
        { name: 'emu', mock: '@pick' },
        { name: 'shuffle array', mock: '@shuffle' },
        { name: 'protocol', mock: '@protocol' }
    ];

let dom = ace.acequire('ace/lib/dom');
ace.acequire('ace/commands/default_commands').commands.push({
    name: 'Toggle Fullscreen',
    bindKey: 'F9',
    exec: function(editor) {
        if (editor._fullscreen_yapi) {
            let fullScreen = dom.toggleCssClass(document.body, 'fullScreen');
            dom.setCssClass(editor.container, 'fullScreen', fullScreen);
            editor.setAutoScrollEditorIntoView(!fullScreen);
            editor.resize();
        }
    }
});

function run(options) {
    var editor, mockEditor, rhymeCompleter;
    function handleJson(json) {
        var curData = mockEditor.curData;
        try {
            curData.text = json;
            var obj = json5.parse(json);
            curData.format = true;
            curData.jsonData = obj;
            curData.mockData = () => Mock.mock(MockExtra(obj, {})); //为防止时时 mock 导致页面卡死的问题，改成函数式需要用到再计算
        } catch (e) {
            curData.format = e.message;
        }
    }
    options = options || {};
    var container, data;
    container = options.container || 'mock-editor';
    if (
        options.wordList &&
        typeof options.wordList === 'object' &&
        options.wordList.name &&
        options.wordList.mock
    ) {
        wordList.push(options.wordList);
    }
    data = options.data || '';
    options.readOnly = options.readOnly || false;
    options.fullScreen = options.fullScreen || false;

    editor = ace.edit(container);
    editor.$blockScrolling = Infinity;
    editor.getSession().setMode('ace/mode/javascript');
    if (options.readOnly === true) {
        editor.setReadOnly(true);
        editor.renderer.$cursorLayer.element.style.display = 'none';
    }
    editor.setTheme('ace/theme/xcode');
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: false,
        enableLiveAutocompletion: true,
        useWorker: true
    });
    editor._fullscreen_yapi = options.fullScreen;
    mockEditor = {
        curData: {},
        getValue: () => mockEditor.curData.text,
        setValue: function(data) {
            editor.setValue(handleData(data));
        },
        editor: editor,
        options: options,
        insertCode: code => {
            let pos = editor.selection.getCursor();
            editor.session.insert(pos, code);
        }
    };

    function formatJson(json) {
        try {
            return JSON.stringify(JSON.parse(json), null, 2);
        } catch (err) {
            return json;
        }
    }

    function handleData(data) {
        data = data || '';
        if (typeof data === 'string') {
            return formatJson(data);
        } else if (typeof data === 'object') {
            return JSON.stringify(data, null, '  ');
        } else {
            return '' + data;
        }
    }

    rhymeCompleter = {
        identifierRegexps: [/[@]/],
        getCompletions: function(editor, session, pos, prefix, callback) {
            if (prefix.length === 0) {
                callback(null, []);
                return;
            }
            callback(
                null,
                wordList.map(function(ea) {
                    return { name: ea.mock, value: ea.mock, score: ea.mock, meta: ea.name };
                })
            );
        }
    };

    langTools.addCompleter(rhymeCompleter);
    mockEditor.setValue(handleData(data));
    handleJson(editor.getValue());

    editor.clearSelection();

    editor.getSession().on('change', () => {
        handleJson(editor.getValue());
        if (typeof options.onChange === 'function') {
            options.onChange.call(mockEditor, mockEditor.curData);
        }
        editor.clearSelection();
    });
    return mockEditor;
}

/**
 * mockEditor({
      container: 'req_body_json', //dom的id
      data: that.state.req_body_json, //初始化数据
      onChange: function (d) {
        that.setState({
          req_body_json: d.text
        })
      }
    })
 */
module.exports = run;
