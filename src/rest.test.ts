import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { bigcommerceQuerySerializer } from './rest';

describe('bigcommerceQuerySerializer', () => {
  it('serializes a single string value', () => {
    assert.equal(bigcommerceQuerySerializer({ name: 'widget' }), 'name=widget');
  });

  it('serializes a single number value', () => {
    assert.equal(bigcommerceQuerySerializer({ limit: 50 }), 'limit=50');
  });

  it('serializes a boolean value', () => {
    assert.equal(bigcommerceQuerySerializer({ is_visible: true }), 'is_visible=true');
  });

  it('serializes an array as CSV', () => {
    assert.equal(
      bigcommerceQuerySerializer({ 'type:in': ['marketing', 'marketplace'] }),
      'type%3Ain=marketing,marketplace',
    );
  });

  it('serializes a numeric array as CSV', () => {
    assert.equal(
      bigcommerceQuerySerializer({ 'channel_id:in': [1, 2, 3] }),
      'channel_id%3Ain=1,2,3',
    );
  });

  it('skips null values', () => {
    assert.equal(bigcommerceQuerySerializer({ a: 'keep', b: null }), 'a=keep');
  });

  it('skips undefined values', () => {
    assert.equal(bigcommerceQuerySerializer({ a: 'keep', b: undefined }), 'a=keep');
  });

  it('encodes special characters in keys and values', () => {
    assert.equal(bigcommerceQuerySerializer({ 'status:in': ['active'] }), 'status%3Ain=active');
  });

  it('handles multiple parameters', () => {
    const result = bigcommerceQuerySerializer({
      'type:in': ['marketing', 'marketplace'],
      'status:in': ['connected', 'disconnected'],
      limit: 250,
    });

    assert.equal(
      result,
      'type%3Ain=marketing,marketplace&status%3Ain=connected,disconnected&limit=250',
    );
  });

  it('returns empty string for empty query', () => {
    assert.equal(bigcommerceQuerySerializer({}), '');
  });

  it('returns empty string when all values are null/undefined', () => {
    assert.equal(bigcommerceQuerySerializer({ a: null, b: undefined }), '');
  });

  it('skips object values', () => {
    assert.equal(bigcommerceQuerySerializer({ a: 'keep', b: { nested: 'value' } }), 'a=keep');
  });
});
