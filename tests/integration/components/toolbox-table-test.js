import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-table", function() {
  setupComponentTest("toolbox-table", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-table}}
    //     template content
    //   {{/toolbox-table}}
    // `);

    this.render(hbs`{{toolbox-table}}`);
    expect(this.$()).to.have.length(1);
  });
});
