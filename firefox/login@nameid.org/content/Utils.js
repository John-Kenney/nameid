/*
    NameID, a namecoin based OpenID identity provider.
    Copyright (C) 2013-2014 by Daniel Kraft <d@domob.eu>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Some basic utility routines.  */

Components.utils.import ("resource://gre/modules/Services.jsm");

var EXPORTED_SYMBOLS = ["log", "logError", "assert", "stripUrl"];

/**
 * Utility function to log a message to the ErrorConsole.  This is used
 * for debugging and may be disabled in release code.
 * @param msg The message to send.
 */
function log (msg)
{
  //Services.console.logStringMessage (msg);
  dump (msg + "\n");
}

/**
 * Report an error to the error console.
 * @param msg Error message to report.
 */
function logError (msg)
{
  Components.utils.reportError (msg);
  dump ("ERROR: " + msg + "\n");
}

/**
 * Utility function to assert a fact for debugging.
 * @param cond The condition that must hold.
 */
function assert (cond)
{
  if (!cond)
    {
      logError ("Assertion failure.");
      throw "Assertion failure.";
    }
}

/**
 * Strip request parameters off an URL.  This is used to get the login
 * page URL for the challenge message.
 * @param url Original URL.
 * @return URL without request parameters.
 */
function stripUrl (url)
{
  var re = /^([^?]*)\?/;
  var arr = re.exec (url);
  if (arr)
    return arr[1];

  return url;
}
