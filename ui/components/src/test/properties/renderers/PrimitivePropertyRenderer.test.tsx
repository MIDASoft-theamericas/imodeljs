/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { expect } from "chai";
import { mount } from "enzyme";
import * as React from "react";
import { Orientation } from "@bentley/ui-core";
import TestUtils from "../../TestUtils";
import { PrimitivePropertyRenderer } from "../../../ui-components/properties/renderers/PrimitivePropertyRenderer";
import { PrimitivePropertyLabelRenderer } from "../../../ui-components";
import { PropertyView } from "../../../ui-components/properties/renderers/PropertyView";

describe("PrimitivePropertyRenderer", () => {
  it("renders properly", () => {
    const rendererMount = mount(
      <PrimitivePropertyRenderer
        orientation={Orientation.Horizontal}
        propertyRecord={TestUtils.createPrimitiveStringProperty("Label", "Model")}
      />);
    expect(rendererMount.find(PrimitivePropertyLabelRenderer).html().indexOf("Label")).to.be.greaterThan(-1);
  });

  it("renders without an offset when orientation is vertical", () => {
    const rendererMount = mount(
      <PrimitivePropertyRenderer
        orientation={Orientation.Vertical}
        propertyRecord={TestUtils.createPrimitiveStringProperty("Label", "Model")}
      />);

    expect(rendererMount.find(PropertyView).get(0).props.offset).to.be.undefined;
  });
});
