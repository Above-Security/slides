# Claude Memory

## Attio API Configuration

- **Token stored in**: `.attiotoken`
- **Token value**: ``

## Attio API Search Syntax

### Correct Filter Syntax for Text Search
```json
{
  "filter": {
    "name": {
      "$contains": "search_term"
    }
  }
}
```

### Available Operators
- `$eq` - Exact equality match
- `$contains` - Case-insensitive partial match for text
- `$not_empty` - Check if field has any value
- `$in` - Check if value is in a set

### API Endpoints
- **Query People**: `POST https://api.attio.com/v2/objects/people/records/query`
- **Query Companies**: `POST https://api.attio.com/v2/objects/companies/records/query`

### Example Working Query
```bash
curl -X POST "https://api.attio.com/v2/objects/people/records/query" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{"filter": {"name": {"$contains": "Pieter"}}}'
```

## Updating Contacts with Transcript Information

### Complete Process for Transcript Updates

1. **Search for Contact in People Database**
```bash
curl -X POST "https://api.attio.com/v2/objects/people/records/query" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{"filter": {"name": {"$contains": "search_name"}}}'
```

2. **Update Person Record Fields**
```bash
curl -X PATCH "https://api.attio.com/v2/objects/people/records/[record_id]" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "values": {
        "description": [{"value": "Enhanced description with call insights"}],
        "short_bio": [{"value": "Concise professional summary"}],
        "lgm_audience_2": [{"value": "Segmentation tags"]}
      }
    }
  }'
```

3. **Find CISOs List and Check if Contact is Member**
```bash
# Get all lists
curl -X GET "https://api.attio.com/v2/lists" \
  -H "Authorization: Bearer [token]"

# Get CISOs list entries  
curl -X POST "https://api.attio.com/v2/lists/recruiting/entries/query" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{}'
```

4. **Update CISOs List Entry with CISO-Specific Fields**
```bash
curl -X PATCH "https://api.attio.com/v2/lists/recruiting/entries/[entry_id]" \
  -H "Authorization: Bearer [token]" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "entry_values": {
        "date_of_conversation": [{"value": "YYYY-MM-DD"}],
        "contact_name": [{"value": "Full Name"}],
        "company": [{"value": "Company Name"}],
        "role": [{"value": "Job Title"}],
        "insider_risk_program_maturity": [{"value": "Maturity level description"}],
        "insider_risk_owner_s": [{"value": "Program owner"}],
        "is_insider_risk_a_top_priority": [{"value": true/false}],
        "current_program_objectives": [{"value": "Current objectives"}],
        "current_insider_risk_tools": [{"value": "Tools in use"}],
        "feedback_on_current_tools": [{"value": "Tool feedback"}],
        "have_they_used_ueba": [{"value": true/false}],
        "ueba_tool_used": [{"value": "UEBA tool name"}],
        "ueba_satisfaction": [{"value": "Satisfaction level"}],
        "tools_they_wish_worked_better": [{"value": "Tool improvement needs"}],
        "top_insider_risk_concerns": [{"value": "Primary concerns"}],
        "do_they_see_dlp_as_sufficient": [{"value": true/false}],
        "risk_detection_priority_areas": [{"value": "Priority areas"}],
        "awareness_approach": [{"value": "Awareness strategy"}],
        "privacy_sensitivity_level": [{"value": "Privacy requirements"}],
        "legal_hr_approval_required_for_deployment": [{"value": true/false}],
        "dpo_privacy_approval_blocking_risk": [{"value": true/false}],
        "data_anonymization_requirement": [{"value": true/false}],
        "budget_holder_s": [{"value": "Budget decision maker"}],
        "budget_status": [{"value": "Budget situation"}],
        "preferred_deployment_method": [{"value": "Deployment preference"}],
        "decision_timeline": [{"value": "Decision process timeline"}],
        "next_step": [{"value": "Follow-up actions"}]
      }
    }
  }'
```

### Key CISOs List Attributes for Transcript Updates
- **Contact Info**: `date_of_conversation`, `contact_name`, `company`, `role`
- **Program Assessment**: `insider_risk_program_maturity`, `insider_risk_owner_s`, `is_insider_risk_a_top_priority`
- **Current State**: `current_program_objectives`, `current_insider_risk_tools`, `feedback_on_current_tools`
- **UEBA Experience**: `have_they_used_ueba`, `ueba_tool_used`, `ueba_satisfaction`
- **Pain Points**: `tools_they_wish_worked_better`, `top_insider_risk_concerns`
- **Requirements**: `privacy_sensitivity_level`, `legal_hr_approval_required_for_deployment`
- **Decision Process**: `budget_holder_s`, `budget_status`, `decision_timeline`, `next_step`

### Important Notes
- Use `PATCH` for updates, not `PUT`
- Person records use `"values"` structure
- List entries use `"entry_values"` structure
- Checkbox fields take boolean values (`true`/`false`)
- Text fields take string values
- Always include `[{"value": "content"}]` array format

## Sales List Migration Process

### Migration from CISO Conversations to Sales List

The CISO tracking functionality has been migrated from the "CISO Conversations" list (recruiting) to the "Sales" list for better sales process management.

### Sales List Configuration
- **List ID**: `868ba08b-c57c-44bc-9aa6-4bc860e3c073`
- **API Slug**: `sales`  
- **Parent Object**: `companies` (not people)
- **List URL**: `https://app.attio.com/above/collection/868ba08b-c57c-44bc-9aa6-4bc860e3c073`

### All CISO Attributes Added to Sales List

The following comprehensive CISO-specific attributes have been created in the Sales list:

#### Basic Contact Information
- `date_of_conversation` (date)
- `contact_name` (text)
- `role` (text)
- `company_summary` (text)
- `notes` (text)
- `transcript` (text)

#### Program Assessment
- `insider_risk_program_maturity` (text)
- `insider_risk_owner_s` (text) 
- `is_insider_risk_a_top_priority` (checkbox)
- `current_program_objectives` (text)
- `program_trigger_catalyst` (text)

#### Current Security Tools
- `current_insider_risk_tools` (text)
- `feedback_on_current_tools` (text)
- `tools_they_wish_worked_better` (text)

#### UEBA Experience
- `have_they_used_ueba` (checkbox)
- `ueba_tool_used` (text)
- `ueba_satisfaction` (text)

#### Monitoring Capabilities
- `shadow_ai_tool_monitoring_today` (checkbox)
- `saas_discovery_tool_monitoring_today` (checkbox)

#### Risk Assessment
- `top_insider_risk_concerns` (text)
- `do_they_see_dlp_as_sufficient` (checkbox)
- `risk_detection_priority_areas` (text)
- `awareness_approach` (text)
- `block_vs_observe_vs_alert_philosophy` (text)

#### Privacy & Compliance
- `privacy_sensitivity_level` (text)
- `byod_in_scope` (checkbox)
- `managed_devices_in_scope` (checkbox)
- `legal_hr_approval_required_for_deployment` (checkbox)
- `dpo_privacy_approval_blocking_risk` (checkbox)
- `data_anonymization_requirement` (checkbox)

#### Budget & Decision Process
- `budget_holder_s` (text)
- `budget_status` (text)
- `budget_range_mentioned` (text)
- `design_partner_willingness` (checkbox)

#### Technical Requirements
- `preferred_deployment_method` (text)
- `technical_risk_sensitivity_perf` (text)
- `legal_risk_sensitivity` (text)

#### Sales Process
- `decision_timeline` (text)
- `next_step` (text)

### Creating Sales List Entries for CISO Prospects

```bash
# Create Sales entry for a company with CISO data
curl -X POST "https://api.attio.com/v2/lists/sales/entries" \
  -H "Authorization: Bearer $(cat /workspaces/above.github.io/.attiotoken)" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "parent_object": "companies",
      "parent_record_id": "[company_record_id]",
      "entry_values": {
        "date_of_conversation": [{"value": "YYYY-MM-DD"}],
        "contact_name": [{"value": "Contact Name"}],
        "role": [{"value": "Job Title"}],
        "insider_risk_program_maturity": [{"value": "Program maturity level"}],
        "is_insider_risk_a_top_priority": [{"value": true}],
        "have_they_used_ueba": [{"value": true}],
        "ueba_tool_used": [{"value": "Tool name"}],
        "budget_status": [{"value": "Budget situation"}],
        "decision_timeline": [{"value": "Timeline description"}],
        "next_step": [{"value": "Follow-up actions"}]
      }
    }
  }'
```

### Key API Endpoints for Sales List Management

```bash
# Get Sales list structure
curl -X GET "https://api.attio.com/v2/lists/sales" \
  -H "Authorization: Bearer $(cat /workspaces/above.github.io/.attiotoken)"

# Query Sales list entries
curl -X POST "https://api.attio.com/v2/lists/sales/entries/query" \
  -H "Authorization: Bearer $(cat /workspaces/above.github.io/.attiotoken)" \
  -H "Content-Type: application/json" \
  -d '{}'

# Create new attribute in Sales list
curl -X POST "https://api.attio.com/v2/lists/sales/attributes" \
  -H "Authorization: Bearer $(cat /workspaces/above.github.io/.attiotoken)" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "title": "Attribute Title",
      "description": "Attribute Description", 
      "api_slug": "attribute_slug",
      "type": "text",
      "is_required": false,
      "is_unique": false,
      "is_multiselect": false,
      "config": {}
    }
  }'
```

### Key Differences from CISO Conversations List
1. **Parent Object**: Companies instead of People (better for B2B sales)
2. **Sales Stages**: Prospecting → Qualification → Meeting → Proposal → Negotiation
3. **Sales Fields**: Estimated contract value, projected close date, priority, owner
4. **Pipeline View**: Kanban-style view for managing sales process
5. **Company-Centric**: Focuses on companies as prospects rather than individual contacts