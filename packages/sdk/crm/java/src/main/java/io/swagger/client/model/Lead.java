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
import io.swagger.client.model.Addresses;
import io.swagger.client.model.Contact;
import io.swagger.client.model.EmailAddresses;
import io.swagger.client.model.PhoneNumbers;
import io.swagger.client.model.User;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import org.threeten.bp.OffsetDateTime;
/**
 * Lead
 */


public class Lead {
  @SerializedName("addresses")
  private Addresses addresses = null;

  @SerializedName("company")
  private String company = null;

  @SerializedName("converted_account_id")
  private String convertedAccountId = null;

  @SerializedName("converted_account")
  private Account convertedAccount = null;

  @SerializedName("converted_contact_id")
  private String convertedContactId = null;

  @SerializedName("converted_contact")
  private Contact convertedContact = null;

  @SerializedName("converted_date")
  private OffsetDateTime convertedDate = null;

  @SerializedName("email_addresses")
  private EmailAddresses emailAddresses = null;

  @SerializedName("first_name")
  private String firstName = null;

  @SerializedName("id")
  private String id = null;

  @SerializedName("remote_id")
  private String remoteId = null;

  @SerializedName("last_name")
  private String lastName = null;

  @SerializedName("lead_source")
  private String leadSource = null;

  @SerializedName("owner_id")
  private String ownerId = null;

  @SerializedName("owner")
  private User owner = null;

  @SerializedName("phone_numbers")
  private PhoneNumbers phoneNumbers = null;

  @SerializedName("title")
  private String title = null;

  @SerializedName("remote_created_at")
  private OffsetDateTime remoteCreatedAt = null;

  @SerializedName("remote_updated_at")
  private OffsetDateTime remoteUpdatedAt = null;

  @SerializedName("remote_was_deleted")
  private Boolean remoteWasDeleted = null;

  @SerializedName("last_modified_at")
  private OffsetDateTime lastModifiedAt = null;

  public Lead addresses(Addresses addresses) {
    this.addresses = addresses;
    return this;
  }

   /**
   * Get addresses
   * @return addresses
  **/
  @Schema(required = true, description = "")
  public Addresses getAddresses() {
    return addresses;
  }

  public void setAddresses(Addresses addresses) {
    this.addresses = addresses;
  }

  public Lead company(String company) {
    this.company = company;
    return this;
  }

   /**
   * Get company
   * @return company
  **/
  @Schema(example = "Supaglue", required = true, description = "")
  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }

  public Lead convertedAccountId(String convertedAccountId) {
    this.convertedAccountId = convertedAccountId;
    return this;
  }

   /**
   * Get convertedAccountId
   * @return convertedAccountId
  **/
  @Schema(example = "88cc44ca-7a34-4e8b-b0da-51c3aae34daf", required = true, description = "")
  public String getConvertedAccountId() {
    return convertedAccountId;
  }

  public void setConvertedAccountId(String convertedAccountId) {
    this.convertedAccountId = convertedAccountId;
  }

  public Lead convertedAccount(Account convertedAccount) {
    this.convertedAccount = convertedAccount;
    return this;
  }

   /**
   * Get convertedAccount
   * @return convertedAccount
  **/
  @Schema(description = "")
  public Account getConvertedAccount() {
    return convertedAccount;
  }

  public void setConvertedAccount(Account convertedAccount) {
    this.convertedAccount = convertedAccount;
  }

  public Lead convertedContactId(String convertedContactId) {
    this.convertedContactId = convertedContactId;
    return this;
  }

   /**
   * Get convertedContactId
   * @return convertedContactId
  **/
  @Schema(example = "8c8de778-a219-4d6c-848c-1d57b52149f6", required = true, description = "")
  public String getConvertedContactId() {
    return convertedContactId;
  }

  public void setConvertedContactId(String convertedContactId) {
    this.convertedContactId = convertedContactId;
  }

  public Lead convertedContact(Contact convertedContact) {
    this.convertedContact = convertedContact;
    return this;
  }

   /**
   * Get convertedContact
   * @return convertedContact
  **/
  @Schema(description = "")
  public Contact getConvertedContact() {
    return convertedContact;
  }

  public void setConvertedContact(Contact convertedContact) {
    this.convertedContact = convertedContact;
  }

  public Lead convertedDate(OffsetDateTime convertedDate) {
    this.convertedDate = convertedDate;
    return this;
  }

   /**
   * Get convertedDate
   * @return convertedDate
  **/
  @Schema(example = "2023-02-27T00:00Z", required = true, description = "")
  public OffsetDateTime getConvertedDate() {
    return convertedDate;
  }

  public void setConvertedDate(OffsetDateTime convertedDate) {
    this.convertedDate = convertedDate;
  }

  public Lead emailAddresses(EmailAddresses emailAddresses) {
    this.emailAddresses = emailAddresses;
    return this;
  }

   /**
   * Get emailAddresses
   * @return emailAddresses
  **/
  @Schema(description = "")
  public EmailAddresses getEmailAddresses() {
    return emailAddresses;
  }

  public void setEmailAddresses(EmailAddresses emailAddresses) {
    this.emailAddresses = emailAddresses;
  }

  public Lead firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

   /**
   * Get firstName
   * @return firstName
  **/
  @Schema(example = "George", description = "")
  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public Lead id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @Schema(example = "e774484c-4ff2-421f-adfa-12f66ed75b91", required = true, description = "")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Lead remoteId(String remoteId) {
    this.remoteId = remoteId;
    return this;
  }

   /**
   * Get remoteId
   * @return remoteId
  **/
  @Schema(example = "54312", required = true, description = "")
  public String getRemoteId() {
    return remoteId;
  }

  public void setRemoteId(String remoteId) {
    this.remoteId = remoteId;
  }

  public Lead lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

   /**
   * Get lastName
   * @return lastName
  **/
  @Schema(example = "Xing", required = true, description = "")
  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Lead leadSource(String leadSource) {
    this.leadSource = leadSource;
    return this;
  }

   /**
   * Get leadSource
   * @return leadSource
  **/
  @Schema(example = "API Blogger", required = true, description = "")
  public String getLeadSource() {
    return leadSource;
  }

  public void setLeadSource(String leadSource) {
    this.leadSource = leadSource;
  }

  public Lead ownerId(String ownerId) {
    this.ownerId = ownerId;
    return this;
  }

   /**
   * Get ownerId
   * @return ownerId
  **/
  @Schema(example = "62e5e0f7-becd-4ae2-be82-8b4e1d5ed8a2", required = true, description = "")
  public String getOwnerId() {
    return ownerId;
  }

  public void setOwnerId(String ownerId) {
    this.ownerId = ownerId;
  }

  public Lead owner(User owner) {
    this.owner = owner;
    return this;
  }

   /**
   * Get owner
   * @return owner
  **/
  @Schema(description = "")
  public User getOwner() {
    return owner;
  }

  public void setOwner(User owner) {
    this.owner = owner;
  }

  public Lead phoneNumbers(PhoneNumbers phoneNumbers) {
    this.phoneNumbers = phoneNumbers;
    return this;
  }

   /**
   * Get phoneNumbers
   * @return phoneNumbers
  **/
  @Schema(required = true, description = "")
  public PhoneNumbers getPhoneNumbers() {
    return phoneNumbers;
  }

  public void setPhoneNumbers(PhoneNumbers phoneNumbers) {
    this.phoneNumbers = phoneNumbers;
  }

  public Lead title(String title) {
    this.title = title;
    return this;
  }

   /**
   * Get title
   * @return title
  **/
  @Schema(example = "Co-Founder", required = true, description = "")
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Lead remoteCreatedAt(OffsetDateTime remoteCreatedAt) {
    this.remoteCreatedAt = remoteCreatedAt;
    return this;
  }

   /**
   * Get remoteCreatedAt
   * @return remoteCreatedAt
  **/
  @Schema(example = "2023-02-10T00:00Z", description = "")
  public OffsetDateTime getRemoteCreatedAt() {
    return remoteCreatedAt;
  }

  public void setRemoteCreatedAt(OffsetDateTime remoteCreatedAt) {
    this.remoteCreatedAt = remoteCreatedAt;
  }

  public Lead remoteUpdatedAt(OffsetDateTime remoteUpdatedAt) {
    this.remoteUpdatedAt = remoteUpdatedAt;
    return this;
  }

   /**
   * Get remoteUpdatedAt
   * @return remoteUpdatedAt
  **/
  @Schema(example = "2023-02-10T00:00Z", description = "")
  public OffsetDateTime getRemoteUpdatedAt() {
    return remoteUpdatedAt;
  }

  public void setRemoteUpdatedAt(OffsetDateTime remoteUpdatedAt) {
    this.remoteUpdatedAt = remoteUpdatedAt;
  }

  public Lead remoteWasDeleted(Boolean remoteWasDeleted) {
    this.remoteWasDeleted = remoteWasDeleted;
    return this;
  }

   /**
   * Get remoteWasDeleted
   * @return remoteWasDeleted
  **/
  @Schema(example = "false", description = "")
  public Boolean isRemoteWasDeleted() {
    return remoteWasDeleted;
  }

  public void setRemoteWasDeleted(Boolean remoteWasDeleted) {
    this.remoteWasDeleted = remoteWasDeleted;
  }

  public Lead lastModifiedAt(OffsetDateTime lastModifiedAt) {
    this.lastModifiedAt = lastModifiedAt;
    return this;
  }

   /**
   * Get lastModifiedAt
   * @return lastModifiedAt
  **/
  @Schema(example = "2022-02-27T00:00Z", description = "")
  public OffsetDateTime getLastModifiedAt() {
    return lastModifiedAt;
  }

  public void setLastModifiedAt(OffsetDateTime lastModifiedAt) {
    this.lastModifiedAt = lastModifiedAt;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Lead lead = (Lead) o;
    return Objects.equals(this.addresses, lead.addresses) &&
        Objects.equals(this.company, lead.company) &&
        Objects.equals(this.convertedAccountId, lead.convertedAccountId) &&
        Objects.equals(this.convertedAccount, lead.convertedAccount) &&
        Objects.equals(this.convertedContactId, lead.convertedContactId) &&
        Objects.equals(this.convertedContact, lead.convertedContact) &&
        Objects.equals(this.convertedDate, lead.convertedDate) &&
        Objects.equals(this.emailAddresses, lead.emailAddresses) &&
        Objects.equals(this.firstName, lead.firstName) &&
        Objects.equals(this.id, lead.id) &&
        Objects.equals(this.remoteId, lead.remoteId) &&
        Objects.equals(this.lastName, lead.lastName) &&
        Objects.equals(this.leadSource, lead.leadSource) &&
        Objects.equals(this.ownerId, lead.ownerId) &&
        Objects.equals(this.owner, lead.owner) &&
        Objects.equals(this.phoneNumbers, lead.phoneNumbers) &&
        Objects.equals(this.title, lead.title) &&
        Objects.equals(this.remoteCreatedAt, lead.remoteCreatedAt) &&
        Objects.equals(this.remoteUpdatedAt, lead.remoteUpdatedAt) &&
        Objects.equals(this.remoteWasDeleted, lead.remoteWasDeleted) &&
        Objects.equals(this.lastModifiedAt, lead.lastModifiedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(addresses, company, convertedAccountId, convertedAccount, convertedContactId, convertedContact, convertedDate, emailAddresses, firstName, id, remoteId, lastName, leadSource, ownerId, owner, phoneNumbers, title, remoteCreatedAt, remoteUpdatedAt, remoteWasDeleted, lastModifiedAt);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Lead {\n");
    
    sb.append("    addresses: ").append(toIndentedString(addresses)).append("\n");
    sb.append("    company: ").append(toIndentedString(company)).append("\n");
    sb.append("    convertedAccountId: ").append(toIndentedString(convertedAccountId)).append("\n");
    sb.append("    convertedAccount: ").append(toIndentedString(convertedAccount)).append("\n");
    sb.append("    convertedContactId: ").append(toIndentedString(convertedContactId)).append("\n");
    sb.append("    convertedContact: ").append(toIndentedString(convertedContact)).append("\n");
    sb.append("    convertedDate: ").append(toIndentedString(convertedDate)).append("\n");
    sb.append("    emailAddresses: ").append(toIndentedString(emailAddresses)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    remoteId: ").append(toIndentedString(remoteId)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    leadSource: ").append(toIndentedString(leadSource)).append("\n");
    sb.append("    ownerId: ").append(toIndentedString(ownerId)).append("\n");
    sb.append("    owner: ").append(toIndentedString(owner)).append("\n");
    sb.append("    phoneNumbers: ").append(toIndentedString(phoneNumbers)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    remoteCreatedAt: ").append(toIndentedString(remoteCreatedAt)).append("\n");
    sb.append("    remoteUpdatedAt: ").append(toIndentedString(remoteUpdatedAt)).append("\n");
    sb.append("    remoteWasDeleted: ").append(toIndentedString(remoteWasDeleted)).append("\n");
    sb.append("    lastModifiedAt: ").append(toIndentedString(lastModifiedAt)).append("\n");
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
