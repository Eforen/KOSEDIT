/**
 * @fileoverview Client Side Only save function for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

// Create a namespace.
var BlocklyStorageClient = {};

BlocklyStorageClient.xmlText = "";

/**
 * Save blocks to database and return a link containing key to XML.
 */
BlocklyStorageClient.save = function() {
  var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  BlocklyStorageClient.xmlText = Blockly.Xml.domToText(xml);
}

/**
 * Load blocks from XML.
 * @param {string} xml Text representation of XML.
 * @private
 */
BlocklyStorageClient.load = function() {
  //try {
  var  xml = Blockly.Xml.textToDom(BlocklyStorageClient.xmlText);
  //} catch (e) {
  //  BlocklyStorageClient.alert(BlocklyStorageClient.XML_ERROR + '\nXML: ' + xml);
  //  return;
  //}
  // Clear the workspace to avoid merge.
  Blockly.getMainWorkspace().clear();
  Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), xml);
};




/**
 * Load blocks from XML File.
 */
BlocklyStorageClient.loadFile = function() {
}

/**
 * Load blocks from XML Clipboard.
 */
BlocklyStorageClient.loadClipboard = function() {
}


/**
 * Save blocks to File as XML.
 */
BlocklyStorageClient.saveFile = function(filename) {
  var blob = new Blob([], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename);
}


/**
 * Save blocks to Clipboard as XML.
 */
BlocklyStorageClient.saveClipboard = function() {
}




/************************************************
 ** Old Stuff Delete all of this before Deploy **
 ************************************************/

/**
 * Backup code blocks to localStorage.
 * @private
 */
BlocklyStorageClient.backupBlocks_ = function() {
  if ('localStorage' in window) {
    var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    // Gets the current URL, not including the hash.
    var url = window.location.href.split('#')[0];
    window.localStorage.setItem(url, Blockly.Xml.domToText(xml));
  }
};

/**
 * Bind the localStorage backup function to the unload event.
 */
BlocklyStorageClient.backupOnUnload = function() {
  window.addEventListener('unload', BlocklyStorageClient.backupBlocks_, false);
};

/**
 * Restore code blocks from localStorage.
 */
BlocklyStorageClient.restoreBlocks = function() {
  var url = window.location.href.split('#')[0];
  if ('localStorage' in window && window.localStorage[url]) {
    var xml = Blockly.Xml.textToDom(window.localStorage[url]);
    Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), xml);
  }
};

/**
 * Save blocks to database and return a link containing key to XML.
 */
BlocklyStorageClient.link = function() {
  var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  var data = Blockly.Xml.domToText(xml);
  BlocklyStorageClient.makeRequest_('/storage', 'xml', data);
};

/**
 * Retrieve XML text from database using given key.
 * @param {string} key Key to XML, obtained from href.
 */
BlocklyStorageClient.retrieveXml = function(key) {
  var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  BlocklyStorageClient.makeRequest_('/storage', 'key', key);
};

/**
 * Global reference to current AJAX request.
 * @type XMLHttpRequest
 * @private
 */
BlocklyStorageClient.httpRequest_ = null;

/**
 * Fire a new AJAX request.
 * @param {string} url URL to fetch.
 * @param {string} name Name of parameter.
 * @param {string} content Content of parameter.
 * @private
 */
BlocklyStorageClient.makeRequest_ = function(url, name, content) {
  if (BlocklyStorageClient.httpRequest_) {
    // AJAX call is in-flight.
    BlocklyStorageClient.httpRequest_.abort();
  }
  BlocklyStorageClient.httpRequest_ = new XMLHttpRequest();
  BlocklyStorageClient.httpRequest_.name = name;
  BlocklyStorageClient.httpRequest_.onreadystatechange =
      BlocklyStorageClient.handleRequest_;
  BlocklyStorageClient.httpRequest_.open('POST', url);
  BlocklyStorageClient.httpRequest_.setRequestHeader('Content-Type',
      'application/x-www-form-urlencoded');
  BlocklyStorageClient.httpRequest_.send(name + '=' + encodeURIComponent(content));
};

/**
 * Callback function for AJAX call.
 * @private
 */
BlocklyStorageClient.handleRequest_ = function() {
  if (BlocklyStorageClient.httpRequest_.readyState == 4) {
    if (BlocklyStorageClient.httpRequest_.status != 200) {
      BlocklyStorageClient.alert(BlocklyStorageClient.HTTPREQUEST_ERROR + '\n' +
          'httpRequest_.status: ' + BlocklyStorageClient.httpRequest_.status);
    } else {
      var data = BlocklyStorageClient.httpRequest_.responseText.trim();
      if (BlocklyStorageClient.httpRequest_.name == 'xml') {
        window.location.hash = data;
        BlocklyStorageClient.alert(BlocklyStorageClient.LINK_ALERT.replace('%1',
            window.location.href));
      } else if (BlocklyStorageClient.httpRequest_.name == 'key') {
        if (!data.length) {
          BlocklyStorageClient.alert(BlocklyStorageClient.HASH_ERROR.replace('%1',
              window.location.hash));
        } else {
          BlocklyStorageClient.loadXml_(data);
        }
      }
      BlocklyStorageClient.monitorChanges_();
    }
    BlocklyStorageClient.httpRequest_ = null;
  }
};

/**
 * Start monitoring the workspace.  If a change is made that changes the XML,
 * clear the key from the URL.  Stop monitoring the workspace once such a
 * change is detected.
 * @private
 */
BlocklyStorageClient.monitorChanges_ = function() {
  var startXmlDom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  var startXmlText = Blockly.Xml.domToText(startXmlDom);
  function change() {
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var xmlText = Blockly.Xml.domToText(xmlDom);
    if (startXmlText != xmlText) {
      window.location.hash = '';
      Blockly.removeChangeListener(bindData);
    }
  }
  var bindData = Blockly.addChangeListener(change);
};

/**
 * Load blocks from XML.
 * @param {string} xml Text representation of XML.
 * @private
 */
BlocklyStorageClient.loadXml_ = function(xml) {
  try {
    xml = Blockly.Xml.textToDom(xml);
  } catch (e) {
    BlocklyStorageClient.alert(BlocklyStorageClient.XML_ERROR + '\nXML: ' + xml);
    return;
  }
  // Clear the workspace to avoid merge.
  Blockly.getMainWorkspace().clear();
  Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), xml);
};

/**
 * Present a text message to the user.
 * Designed to be overridden if an app has custom dialogs, or a butter bar.
 * @param {string} message Text to alert.
 */
BlocklyStorageClient.alert = function(message) {
  window.alert(message);
};
