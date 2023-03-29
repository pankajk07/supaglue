/*
 * Supaglue CRM API
 * # Introduction  Welcome to the Supaglue unified CRM API documentation. You can use this API to read data that has been synced into Supaglue from third-party providers.  ### Base API URL  ``` http://localhost:8080/crm/v1 ``` 
 *
 * OpenAPI spec version: 0.6.0
 * Contact: docs@supaglue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.client.model.Account;
import io.swagger.client.model.Errors;
import io.swagger.client.model.Logs;
import io.swagger.client.model.Warnings;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * InlineResponse201
 */


public class InlineResponse201 {
  @SerializedName("errors")
  private Errors errors = null;

  @SerializedName("logs")
  private Logs logs = null;

  @SerializedName("model")
  private Account model = null;

  @SerializedName("warnings")
  private Warnings warnings = null;

  public InlineResponse201 errors(Errors errors) {
    this.errors = errors;
    return this;
  }

   /**
   * Get errors
   * @return errors
  **/
  @Schema(description = "")
  public Errors getErrors() {
    return errors;
  }

  public void setErrors(Errors errors) {
    this.errors = errors;
  }

  public InlineResponse201 logs(Logs logs) {
    this.logs = logs;
    return this;
  }

   /**
   * Get logs
   * @return logs
  **/
  @Schema(description = "")
  public Logs getLogs() {
    return logs;
  }

  public void setLogs(Logs logs) {
    this.logs = logs;
  }

  public InlineResponse201 model(Account model) {
    this.model = model;
    return this;
  }

   /**
   * Get model
   * @return model
  **/
  @Schema(description = "")
  public Account getModel() {
    return model;
  }

  public void setModel(Account model) {
    this.model = model;
  }

  public InlineResponse201 warnings(Warnings warnings) {
    this.warnings = warnings;
    return this;
  }

   /**
   * Get warnings
   * @return warnings
  **/
  @Schema(description = "")
  public Warnings getWarnings() {
    return warnings;
  }

  public void setWarnings(Warnings warnings) {
    this.warnings = warnings;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse201 inlineResponse201 = (InlineResponse201) o;
    return Objects.equals(this.errors, inlineResponse201.errors) &&
        Objects.equals(this.logs, inlineResponse201.logs) &&
        Objects.equals(this.model, inlineResponse201.model) &&
        Objects.equals(this.warnings, inlineResponse201.warnings);
  }

  @Override
  public int hashCode() {
    return Objects.hash(errors, logs, model, warnings);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse201 {\n");
    
    sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
    sb.append("    logs: ").append(toIndentedString(logs)).append("\n");
    sb.append("    model: ").append(toIndentedString(model)).append("\n");
    sb.append("    warnings: ").append(toIndentedString(warnings)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
