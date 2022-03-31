import { test } from 'uvu';
import assert from 'assert/strict';
import { escapeName } from './escapeName';

test('escapeName should escape', () => {
  assert.equal(escapeName(''), "''");
  assert.equal(escapeName('fooBar'), 'fooBar');
  assert.equal(escapeName('Foo Bar'), `'Foo Bar'`);
  assert.equal(escapeName('foo bar'), `'foo bar'`);
  assert.equal(escapeName('foo-bar'), `'foo-bar'`);
  assert.equal(escapeName('foo.bar'), `'foo.bar'`);
  assert.equal(escapeName('foo_bar'), 'foo_bar');
  assert.equal(escapeName('123foo.bar'), `'123foo.bar'`);
  assert.equal(escapeName('@foo.bar'), `'@foo.bar'`);
  assert.equal(escapeName('$foo.bar'), `'$foo.bar'`);
  assert.equal(escapeName('_foo.bar'), `'_foo.bar'`);
  assert.equal(escapeName('123foobar'), `'123foobar'`);
  assert.equal(escapeName('@foobar'), `'@foobar'`);
  assert.equal(escapeName('$foobar'), '$foobar');
  assert.equal(escapeName('_foobar'), '_foobar');
});

test.run();
